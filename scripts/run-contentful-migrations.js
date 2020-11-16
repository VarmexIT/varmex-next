#!/usr/bin/env node
const { promisify } = require('util')
const { readdir } = require('fs')
const path = require('path')
const { createClient } = require('contentful-management')
const { default: runMigration } = require('contentful-migration/built/bin/cli')

/* eslint-disable no-console */
const run = async () => {
  try {
    const readdirAsync = promisify(readdir)
    const defaultLocale = 'sv-SE'
    const getVersionOfFile = file => file.replace('.js', '').replace(/_/g, '.')
    const getFileOfVersion = version => `${version.replace(/\./g, '_')}.js`

    const [, , SPACE_ID, ENVIRONMENT_ID, ACCESS_TOKEN] = process.argv
    const MIGRATIONS_DIR = path.join('.', 'contentful-migrations')

    const client = createClient({
      accessToken: ACCESS_TOKEN,
    })
    const space = await client.getSpace(SPACE_ID)

    console.log('Running with the following configuration')
    console.log(`SPACE_ID: ${SPACE_ID}`)
    console.log(`ENVIRONMENT_ID: ${ENVIRONMENT_ID}`)
    const environment = await space.getEnvironment(ENVIRONMENT_ID)

    console.log('Read available migrations from the file system')
    const availableMigrations = (await readdirAsync(MIGRATIONS_DIR))
      .filter(file => /^\d+?\.js$/.test(file))
      .map(file => getVersionOfFile(file))
      .sort((a, b) => a - b)

    console.log(
      `Find the current migration version of the Contentful '${ENVIRONMENT_ID}' environment`
    )
    const { items: versions } = await environment.getEntries({
      content_type: 'versionTracking',
    })

    if (!versions.length || versions.length > 1) {
      throw new Error("There should only be one entry of type 'versionTracking'")
    }

    let storedVersionEntry = versions[0]
    const currentVersionString = storedVersionEntry.fields.version[defaultLocale]
    console.log('Current version string: ', currentVersionString)

    console.log('Evaluate which migrations to run')
    const currentMigrationIndex = availableMigrations.indexOf(currentVersionString)
    console.log('currentMigrationIndex:', currentMigrationIndex)

    if (currentMigrationIndex === -1) {
      throw new Error(`Version ${currentVersionString} is not matching with any known migration`)
    }
    const migrationsToRun = availableMigrations.slice(currentMigrationIndex + 1)

    console.log('Migrations to run', migrationsToRun)
    const migrationOptions = {
      spaceId: SPACE_ID,
      environmentId: ENVIRONMENT_ID,
      accessToken: ACCESS_TOKEN,
      yes: true,
    }

    console.log('Run migrations and update version entry')
    for (let i = 0; i < migrationsToRun.length; i += 1) {
      const migrationToRun = migrationsToRun[i]
      console.log('Migration to run: ', migrationToRun)

      const filePath = path.join(
        __dirname,
        '..',
        'contentful-migrations',
        getFileOfVersion(migrationToRun)
      )
      console.log(`Running ${filePath}`)
      /* eslint-disable no-await-in-loop */
      await runMigration(
        Object.assign(migrationOptions, {
          filePath,
        })
      )
      console.log(`${migrationToRun} succeeded`)

      storedVersionEntry.fields.version[defaultLocale] = migrationToRun
      storedVersionEntry = await storedVersionEntry.update()
      storedVersionEntry = await storedVersionEntry.publish()

      console.log(`Updated version entry to ${migrationToRun}`)
    }

    console.log('All done!')
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()

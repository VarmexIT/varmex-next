import styles from './Varmehandbok.styles'
// import VarmehandbokNav from './VarmehandbokNav'

const Varmehandbok = () => {
  return (
    <styles.varmehandbok noGutter>
      <img
        src="/img/varmehandbok.png"
        alt="Kvinna som sitter bekvämt i en fåtölj och dricker kaffe"
      />
      {/* <VarmehandbokNav /> */}
      <styles.content>
        <p>Kommer inom kort</p>
      </styles.content>
    </styles.varmehandbok>
  )
}

export default Varmehandbok

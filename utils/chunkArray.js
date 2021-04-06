const chunkArray = (inputArray, perChunk) => {
  return inputArray.reduce((acc, current, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [] // start a new chunk
    }

    acc[chunkIndex].push(current)

    return acc
  }, [])
}

export default chunkArray

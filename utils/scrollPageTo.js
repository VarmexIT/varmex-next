const scrollPageTo = top => {
  window.scrollTo({
    left: 0,
    top: top - 69,
    behavior: 'smooth',
  })
}

export default scrollPageTo

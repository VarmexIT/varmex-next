const scrollPageTo = top => {
  window.scrollTo({
    left: 0,
    top: top - 70,
    behavior: 'smooth',
  })
}

export default scrollPageTo

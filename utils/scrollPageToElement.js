function scrollTo(element, yOffset = 0) {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}

const scrollPageToElement = (id, is750) => {
  const sectionElement = document.querySelector(id)
  const offsetY = !is750 ? -48 : -53

  scrollTo(sectionElement, offsetY)
}

export default scrollPageToElement

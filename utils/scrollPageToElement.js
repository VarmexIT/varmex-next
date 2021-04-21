function scrollTo(element, yOffset = 0, smooth) {
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  const options = smooth ? { behavior: 'smooth' } : {}

  window.scrollTo({
    top: y,
    ...options,
  })
}

const scrollPageToElement = (id, is750, { smooth = true } = {}) => {
  const sectionElement = document.querySelector(id)
  const offsetY = !is750 ? -48 : -53

  scrollTo(sectionElement, offsetY, smooth)
}

export default scrollPageToElement

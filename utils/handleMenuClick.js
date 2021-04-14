const handleMenuClick = e => {
  // e.preventDefault()

  const sectionElement = document.querySelector(e.target.hash)

  sectionElement.scrollIntoView({
    behavior: 'smooth',
  })
}

export default handleMenuClick

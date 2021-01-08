export const postEmail = async data => {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => res.json())

  return response
}

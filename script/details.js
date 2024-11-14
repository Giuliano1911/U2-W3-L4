const apiKey = 'v3LrfxHGcvmk2cBSfQICpdfeUZ1bPtb3Hf1AXPhqJFB5EQT5iOtgoeVo'
const addressBarContent = new URLSearchParams(window.location.search)
const id = addressBarContent.get('id')
const url = `https://api.pexels.com/v1/photos/${id}`
const img = document.getElementsByTagName('img')[0]
const title = document.getElementsByClassName('card-title')[0]
const p = document.getElementsByClassName('card-text')[0]
const main = document.getElementsByTagName('main')[0]

fetch(url, {
  headers: {
    Authorization: apiKey,
  },
})
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((photo) => {
    console.log(photo)
    img.src = photo.src.landscape
    title.textContent = photo.photographer
    p.textContent = photo.photographer_url
    main.style.backgroundColor = photo.avg_color
  })
  .catch((err) => {
    console.log(err)
  })

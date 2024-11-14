const apiKey = 'v3LrfxHGcvmk2cBSfQICpdfeUZ1bPtb3Hf1AXPhqJFB5EQT5iOtgoeVo'

function loadImages() {
  const url = `https://api.pexels.com/v1/search?query=${this.dataset.vehicle}&per_page=9`
  fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then(({ photos }) => {
      console.log(photos)

      photos.forEach(({ src, id }, i) => {
        allImages[i].src = src.portrait
        all9Mins[i].innerText = id
      })
      for (let i = 0; i < allImages.length; i++) {
        allImages[i].addEventListener('click', function () {
          window.location.href = `details.html?id=${'' + photos[i].id}`
        })
      }
      for (let i = 0; i < allImages.length; i++) {
        allTitles[i].addEventListener('click', function () {
          window.location.href = `details.html?id=${'' + photos[i].id}`
        })
      }
      const viewButtons = document.querySelectorAll(
        '.btn-group button:first-child'
      )
      const modalImg = document.querySelector('.modal img')
      viewButtons.forEach((button, i) => {
        button.setAttribute('data-bs-toggle', 'modal')
        button.setAttribute('data-bs-target', '#exampleModal')
        button.addEventListener('click', function () {
          modalImg.src = photos[i].src.medium
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const allImages = document.getElementsByClassName('card-img-top')
const allTitles = document.getElementsByClassName('card-title')

const loadButtons = document.getElementsByClassName('data-vehicle')

for (let i = 0; i < loadButtons.length; i++) {
  loadButtons[i].addEventListener('click', loadImages)
}

const editButtons = document.querySelectorAll('.btn-group button:last-child')
const allCards = document.querySelectorAll('.card')

editButtons.forEach((button, i) => {
  button.textContent = 'Hide'
  button.addEventListener('click', function () {
    allCards[i].classList.add('d-none')
  })
})

const all9Mins = document.querySelectorAll('small')

const form = document.getElementById('search')
const input = document.querySelector('input')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  form.dataset.vehicle = input.value
  loadImages.call(form)
  input.value = ''
})

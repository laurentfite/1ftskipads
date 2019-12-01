const div = document.createElement("div")
div.style.width = "100%"
div.style.height = "100%"
div.style.background = "rgba(0,0,0,0.95)"
div.style.color = "white"
div.style.position = "absolute"
div.style.top = "0px"
div.style.left = "0px"
div.style.zIndex = "99999999999999"
div.style.display = "none"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.fontSize = "200%"
div.style.flexDirection = "column"

let timeSkipped = 0

setInterval(() => {
  try {
    let z = document.getElementById('adContainer')
    if (!z) return
    Array.from(z.getElementsByTagName('video')).forEach(ad => {
      // Skip the video
      if (ad.duration) {
        ad.currentTime = ad.duration
        ad.muted = true
        div.innerHTML = `
          <p>Profitez de votre replay sans pub 🍿</p>
          <p>Temps de cerveau sauvé : ${0 | (timeSkipped += ad.duration)}s</p>
        `
      }
    })
    // Display the layer
    if (div.style.display === 'none') {
      div.style.display = 'flex'
      z.appendChild(div)
    }
  } catch (err) {}
}, 1000)

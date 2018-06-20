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
div.style.fontSize = "300%"
div.innerHTML = "Profitez de votre replay sans pub 🍿"

const skipCurrentVideo = (v) => {
  v.currentTime = v.duration
}

const skippingInterval = setInterval(() => {
  let v = document.querySelector('[id^="videoElement_"]')

  if (v.duration < 40.0) { // 🔥 It's an ad, burn it
    // Display the layer
    let z = document.getElementById('zonePlayer')
    if (div.style.display === 'none') {
      div.style.display = 'flex'
      z.appendChild(div)
    }
    // Skip the video
    skipCurrentVideo(v)
  } else if (v && !isNaN(v.duration)) { // 🍿 Grab some popcorn, it's on
    clearInterval(skippingInterval)
    div.style.display = 'none'
  }
}, 1000)

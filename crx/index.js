const div = document.createElement('div')
Object.assign(div.style, {
  width: '100%',
  height: '100%',
  background: '#000e',
  color: 'white',
  position: 'absolute',
  top: '0px',
  left: '0px',
  zIndex: Number.MAX_SAFE_INTEGER,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '200%',
  display: 'flex',
  flexDirection: 'column',
})


let z,
  layered = false,
  timeSkipped = 0
setInterval(() => {
  z = document.getElementById('adContainer')
  if (!z) return
  // Display the layer
  if (!layered) {
    z.appendChild(div)
    layered = true
  }
  // Multiple video elements may be spawned depending on the ad provider
  // ...I think
  Array.from(z.getElementsByTagName('video')).forEach(ad => {
    ad.muted = true
    // Ignore videos < 2s because they're probably the "loading" video and
    // they're most likely not ads anyway
    if (ad.duration > 2) {
      // Skip the video
      ad.currentTime = ad.duration
      div.innerHTML = `
        <p>Profitez de votre replay sans pub 🍿</p>
        <p>Temps de cerveau sauvé : ${0 | (timeSkipped += ad.duration)}s</p>
      `
    }
  })
}, 1000)

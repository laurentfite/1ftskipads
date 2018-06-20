// Create layer div
const div = document.createElement("div")
const style = {
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.97)',
  color: 'white',
  position: 'absolute',
  top: '0px',
  left: '0px',
  zIndex: '99999999999999',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '300%'
}
Object.assign(div.style,style);
div.innerHTML = "Profitez de votre replay sans pub 🍿"

const skipCurrentVideo = (v) => {
  v.currentTime = v.duration
}

let v
setTimeout(() => {
  const skippingInterval = setInterval(() => {
    v = document.querySelector('[id^="videoElement_"]')

    // 🔥 It's an ad, burn it
    if (v && v.duration < 40.0) {
      // Display the layer
      let z = document.getElementById('zonePlayer')
      if (div.style.display === 'none') {
        div.style.display = 'flex'
        z.appendChild(div)
      }
      // Skip the video
      if (!document.getElementsByClassName('ads__timer')[0].hidden) {
        skipCurrentVideo(v)
      }
    } else if (v && !isNaN(v.duration)) { // 🍿 Grab some popcorn, it's on
      clearInterval(skippingInterval)
      div.style.display = 'none'
    }
  }, 1000)
}, 1000)

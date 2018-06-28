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
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '300%',
  display: 'flex'
}
Object.assign(div.style,style);
div.innerHTML = 'Profitez de votre replay sans pub 🍿'

const NB_CHECKS = 3

let v, cpt = NB_CHECKS
addEventListener('load', () => {
  document.getElementById('zonePlayer').appendChild(div)
  const i = setInterval(() => {
    v = document.querySelector('[id^="videoElement_"]')
    if (!document.getElementsByClassName('ads__timer')[0].hidden) { // 🔥 It's an ad, burn it
      cpt = NB_CHECKS
      // Skip the video
      v.currentTime = v.duration
    } else if (!cpt--) { // 🍿 Grab some popcorn, it's on
      div.style.display = 'none'
      clearInterval(i)
    }
  }, 500)
})

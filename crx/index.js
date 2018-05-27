setInterval(() => {
  if (!document.getElementsByClassName('ads__timer')[0].hidden) {
    let v = document.querySelector('[id^="videoElement_"]')
    v.currentTime = v.duration
  }
}, 1000)

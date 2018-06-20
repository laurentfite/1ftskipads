# TF1 adblock
Profitez de votre replay sans pub !

📥 Installer l'[Extension Chrome](https://chrome.google.com/webstore/detail/gcljghblepcfkdcldkelpnnbmhjnkdan)

## Comment ça marche ?

Cette extension Chrome permet de _zapper_ les pubs avant et pendant la vidéo qui vous intéresse.
Le principe est tout simple et peut-être résumé avec une version simplifiée du script :

```
setInterval(() => {
  if (!document.getElementsByClassName('ads__timer')[0].hidden) {
    let v = document.querySelector('[id^="videoElement_"]')
    v.currentTime = v.duration
  }
}, 1000)
```

On détecte la vidéo comme une pub, et on va directement à la fin de la vidéo pour la zapper. Easy peasy 🍋

## One-liner (copy-paste)

`setInterval(()=>{if(!document.getElementsByClassName("ads__timer")[0].hidden){let e=document.querySelector('[id^="videoElement_"]');e.currentTime=e.duration}},1e3);`

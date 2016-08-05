// https://github.com/mpj/fpjs8/blob/master/src/app.js

import loadImage from './load-image'

let addImg = (src) => {
    let imgElement =
        document.createElement("img")
    imgElement.src = src
    document.body.appendChild(imgElement)
}

// see how little code compared to callbacks
Promise.all([
    loadImage('images/cat1.jpg'),
    loadImage('images/cat2.jpg'),
    loadImage('images/cat3.jpg'),
    loadImage('images/cat4.jpg')
]).then((images) => {
    images.forEach(img => addImg(img.src))
}).catch((error) => {
    // handle error code
})
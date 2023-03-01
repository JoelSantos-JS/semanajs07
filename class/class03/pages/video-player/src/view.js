export default class View {

    #btnInit = document.querySelector('#init')
    #statusElement= document.querySelector('#status')
    #videoFrameCanvas = document.createElement('canvas')
    #canvasContext = this.#videoFrameCanvas.getContext('2d' , {willReadFrequently: true} )
    #videoElemente = document.querySelector('#video')
    
    getVideoFrame(video) {
        const canvas = this.#videoFrameCanvas
        const [width , height] = [video.videoWidth , video.videoHeight]
        canvas.width = width
        canvas.height = height

        this.#canvasContext.drawImage(video, 0,0,width,height)
        return this.#canvasContext.getImageData(0,0,width,height)
    }

    togglePlayVideo() {
        if(this.#videoElemente.paused){
            this.#videoElemente.play()
            return
        }
        this.#videoElemente.pause()
    }
    enableButton() {
        this.#btnInit.disabled = false
    }

    configureOnBntClick(fn) {
        this.#btnInit.addEventListener('click', fn)
    }

    log(text) {
        this.#statusElement.innerHTML = text
    }
   
} 

export default class Controller {
      #view
      #service
      #worker
      #blinkCounter = 0
      #camera
    constructor({view ,  worker, camera , videoUrl}) {
      this.#view = view
      this.#camera = camera
      this.#worker = this.#configureWorker(worker)
      this.#view.configureOnBntClick(this.onBtnStart.bind(this))
      this.#view.setVideoSrc(videoUrl)
    }


    static async initialize(deps) {
        const controller = new Controller(deps)
        controller.log('NOT YET DETECTING EYE blink')
        return controller.init()
      }

      #configureWorker(worker) {
            let ready = false
            worker.onmessage = ({data}) => {
                  if('READY' === data) {
                        console.log('Worker is ready')
                        this.#view.enableButton()
                        ready = true
                        return
                  }
                  const blinked = data.blinked
                  this.#blinkCounter += blinked
                  this.#view.togglePlayVideo()
                  console.log('blink' ,blinked)
      
            }
           
            return {
                  send(msg) {
                        if(!ready) return
                        worker.postMessage(msg)
                  }
            }
      }

      async init() {
            console.log('Init')
      }

      loop() {
            const video = this.#camera.video
            const img = this.#view.getVideoFrame(video)
            this.#worker.send(img)
            this.log(`detecting eye blink`)

            setTimeout(() => {
                        this.loop()
            }, 100);
      }

      log(text) {
            const time = `   -blinked ti me: ${this.#blinkCounter}`
            this.#view.log(`status: ${text}.`.concat(this.#blinkCounter ? time: ""))
      }
      onBtnStart() {
            this.log('Initialzing detection...')
            this.#blinkCounter = 0
            this.loop()
      }
}
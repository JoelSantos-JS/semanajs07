function supportWorkerType() {
    let supports = false

    const tester = {
        get type() {supports = true}
    }

    try {
        new Worker('blob://', tester).terminate()
    } catch (error) {
        
    }finally{
        return supports
    }
}

function prepareRunChecher({timerDelay}) {
    let lastEvent = Date.now()

    return {
        shouldRun() {
            const result = (Date.now() - lastEvent) > timerDelay
            if(result) lastEvent = Date.now()

            return result
        }
    }
}

export {
    supportWorkerType,
    prepareRunChecher
}
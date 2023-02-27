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

export {
    supportWorkerType
}
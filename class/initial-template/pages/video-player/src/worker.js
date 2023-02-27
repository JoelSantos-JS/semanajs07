onmessage = ({data}) => {
    console.log('Worker' , data)

    postMessage({
        'oK' : 'OK'
    })
}
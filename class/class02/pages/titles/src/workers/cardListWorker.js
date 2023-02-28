onmessage = ({data}) => {
    let counter = 00
   
        console.log('activating blocking operation...', data.maxItems)
        console.time('blocking-op')
        // blocking function
        // 1e5 = 100.000
        for ( ; counter <  data.maxItems; counter++) console.log('.')
        console.timeEnd('blocking-op')
 

    postMessage(
        {
            respose : 'pk',
            data: counter
        }
    )
}
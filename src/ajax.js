export function get(url){
    return new Promise(function(resolve, reject){
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.send(null)
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.response)
                resolve(data)
            }
        }
        request.onerror = function(error){
            reject(error)
        }
    })
}
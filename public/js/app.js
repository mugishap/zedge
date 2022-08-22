const getRingtones = async() => {

    const api = await fetch('https://api-gateway.zedge.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'applicatio/json'
        },
        body: JSON.stringify({
            "variables": {
                "input": {
                    "contentType": "RINGTONE",
                    "size": 24
                }
            }
        })
    })

    const res = await api.json()
    console.log(res)
    const ringtonesHolder = document.querySelector('.ringtones-holder')
    const data = res.data.browseAsUgc.items
    data.map((item) => {
        return (<div>{item}</div>)
    })
    return res
}
window.addEventListener('load', () => {
    getRingtones()
})
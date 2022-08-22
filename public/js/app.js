const getRingtones = async () => {

    const api = await fetch('https://api-gateway.zedge.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": "\n    query browse($input: BrowseAsUgcInput!) {\n      browseAsUgc(input: $input) {\n        ...browseContentItemsResource\n      }\n    }\n    \n  fragment browseContentItemsResource on BrowseContentItems {\n    page\n    total\n    items {\n      ... on BrowseWallpaper {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n      }\n\n      ... on BrowseRingtone {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n        meta {\n          durationMs\n          previewUrl\n          gradientStart\n          gradientEnd\n        }\n      }\n    }\n  }\n\n  ",
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
    let ringtonesHolder = document.querySelector('.ringtones-holder')
    const data = res.data.browseAsUgc.items

    data.forEach(element => {
        const div = document.createElement('div')
        const overlay = document.createElement('div')
        overlay.innerHTML = "<span id='ringtone-play-button' class='text-4xl cursor-pointer material-icons text-white'>play_circle</span>"
        const overlayStyles = ['bg-black/40', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'w-full', 'h-full', 'absolute', 'top-0', 'left-0']
        overlayStyles.forEach((style) => {
            overlay.classList.add(style)
        })

        const img = document.createElement('img')
        div.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        div.style.borderRadius = '10px'
        div.style.position = 'relative'
        img.src = element.imageUrl
        div.append(img)
        div.append(overlay)
        ringtonesHolder.append(div)
        const ringtonePlayButton = document.querySelector('#ringtone-play-button')
    });
    // return res
}


const getWallpapers = async () => {

    const api = await fetch('https://api-gateway.zedge.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": "\n    query browse($input: BrowseAsUgcInput!) {\n      browseAsUgc(input: $input) {\n        ...browseContentItemsResource\n      }\n    }\n    \n  fragment browseContentItemsResource on BrowseContentItems {\n    page\n    total\n    items {\n      ... on BrowseWallpaper {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n      }\n\n      ... on BrowseRingtone {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n        meta {\n          durationMs\n          previewUrl\n          gradientStart\n          gradientEnd\n        }\n      }\n    }\n  }\n\n  ",
            "variables": {
                "input": {
                    "contentType": "WALLPAPER",
                    "size": 24
                }
            }
        })
    })

    const res = await api.json()
    console.log(res)
    let wallpapersHolder = document.querySelector('.wallpapers-holder')
    const data = res.data.browseAsUgc.items

    data.forEach(element => {
        const div = document.createElement('div')
        const overlay = document.createElement('div')
        overlay.innerHTML = "<span id='' class='font-xl material-icons text-white'>play_circle</span>"
        const overlayStyles = ['bg-black/40', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'w-full', 'h-full', 'absolute', 'top-0', 'left-0']
        overlayStyles.forEach((style) => {
            overlay.classList.add(style)
        })
        const divStyles = ['rounded-lg', 'flex','h-[24vh]', 'items-center', 'justify-center', 'relative']
        const img = document.createElement('img')
        div.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        divStyles.forEach(style => {
            div.classList.add(style)
        })
        img.style.width='100%'
        img.style.height='100%'
        img.src = element.imageUrl
        div.append(img)
        div.append(overlay)
        ringtonesHolder.append(div)
    });
    // return res
}

window.addEventListener('load', () => {
    getRingtones()
})
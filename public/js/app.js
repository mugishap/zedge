const getRingtones = async () => {
    let ringtonesHolder = document.querySelector('.ringtones-holder')
    ringtonesHolder.innerHTML = 'Loading...'
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
    const data = res.data.browseAsUgc.items

    data.forEach(element => {
        const div = document.createElement('div')
        const overlay = document.createElement('div')
        const img = document.createElement('img')
        const imgStyles = ['rounded-lg', 'w-full', 'h-full']

        overlay.innerHTML = `<span style='transform: scale(3);' id='ringtone-play-button' class='scale-110 cursor-pointer material-icons rounded-full text-white my-auto border-white border-2 p-[5px]'>play_arrow</span><span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>`

        const overlayStyles = ['bg-gradient-to-t', 'from-black/70', 'rounded-lg', 'flex', 'items-center', 'flex-col', 'justify-end', 'w-full', 'h-full', 'absolute', 'top-0', 'left-0']
        overlayStyles.forEach((style) => {
            overlay.classList.add(style)
        })

        const divStyles = ['rounded-lg', 'flex', 'h-[54vh]', 'bg-gradient-to-r', `from-[#${element.meta.gradientStart}]`, `to-[#${element.meta.gradientEnd}]`, 'items-center', 'justify-center', 'relative']

        divStyles.forEach((style) => {
            div.classList.add(style)
        })

        imgStyles.forEach((style) => {
            img.classList.add(style)
        })

        img.src = element.imageUrl
        div.append(img)
        div.append(overlay)
        ringtonesHolder.append(div)
        const ringtonePlayButton = document.querySelector('#ringtone-play-button')
    });
    ringtonesHolder.removeChild(ringtonesHolder.firstChild)
    ringtonesHolder.addEventListener('click', () => {

    })

}


const getWallpapers = async () => {
    
    let wallpapersHolder = document.querySelector('.wallpapers-holder')
    wallpapersHolder.innerHTML = 'Loading...'
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
    const data = res.data.browseAsUgc.items

    data.forEach(element => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const divStyles = ['rounded-lg', 'flex', 'h-[54vh]', `bg-[#${Math.floor(Math.random() * 16777215).toString(16)}]`, 'items-center', 'justify-center', 'relative']
        const imgStyles = ['rounded-lg', 'w-full', 'h-full']
        const overlayStyles = ['bg-gradient-to-t', 'from-black/70', 'rounded-lg', 'flex', 'items-center', 'flex-col', 'justify-end', 'w-full', 'h-full', 'absolute', 'top-0', 'left-0']
        const overlay = document.createElement('div')
        overlay.innerHTML = `<span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>`

        overlayStyles.forEach((style) => {
            overlay.classList.add(style)
        })
        imgStyles.forEach((style) => {
            img.classList.add(style)
        })

        divStyles.forEach(style => {
            div.classList.add(style)
        })
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.objectFit = 'cover'
        img.src = element.imageUrl
        div.append(img)
        div.append(overlay)
        wallpapersHolder.append(div)
    });
    wallpapersHolder.removeChild(wallpapersHolder.firstChild)
    // return res
}

const getRingtonesAndWallpapers = async () => {
    let allHolder = document.querySelector('.all-holder')
    
    allHolder.innerHTML = 'Loading...'
    const api = await fetch('https://api-gateway.zedge.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": "\n    query browse($input: BrowseAsUgcInput!) {\n      browseAsUgc(input: $input) {\n        ...browseContentItemsResource\n      }\n    }\n    \n  fragment browseContentItemsResource on BrowseContentItems {\n    page\n    total\n    items {\n      ... on BrowseWallpaper {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n      }\n\n      ... on BrowseRingtone {\n        id\n        contentType\n        title\n        tags\n        imageUrl\n        placeholderUrl\n        licensed\n        meta {\n          durationMs\n          previewUrl\n          gradientStart\n          gradientEnd\n        }\n      }\n    }\n  }\n\n  ",
            "variables": {
                "input": {
                    "contentType": "ALL",
                    "size": 24
                }
            }
        })
    })

    const res = await api.json()
    console.log(res)
    const data = res.data.browseAsUgc.items

    data.forEach(element => {
        const div = document.createElement('div')
        const divStyles = element.contentType === 'RINGTONE' ? ['rounded-lg','aspect-[1/1.7]', 'flex', 'bg-gradient-to-r', `from-[#${element.meta.gradientStart}]`, `to-[#${element.meta.gradientEnd}]`, 'items-center', 'justify-center', 'relative'] : ['rounded-lg', 'flex', 'items-center','aspect-[1/1.7]', 'justify-center', 'relative']

        const imgStyles = ['rounded-lg', 'w-full', 'h-full']
        const img = document.createElement('img')
        const overlay = document.createElement('div')
        element.contentType === 'RINGTONE' ? overlay.innerHTML = `<span style='transform: scale(3);' id='ringtone-play-button' class=' cursor-pointer material-icons rounded-full text-white my-auto border-white border-2 p-[5px]'>play_arrow</span><span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>` : overlay.innerHTML = `<span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>`
        const overlayStyles = ['bg-gradient-to-t', 'from-black/70', 'rounded-lg', 'flex', 'items-center', 'flex-col', 'justify-end', 'w-full', 'h-full', 'absolute', 'top-0', 'left-0']
        overlayStyles.forEach((style) => {
            overlay.classList.add(style)
        })
        imgStyles.forEach((style) => {
            img.classList.add(style)
        })
        divStyles.forEach(style => {
            div.classList.add(style)
        })
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.objectFit = 'cover'
        img.src = element.imageUrl
        div.append(img)
        div.append(overlay)
        allHolder.append(div)
    })
    allHolder.removeChild(allHolder.firstChild)
}

window.addEventListener('load', () => {
   const path = window.location.pathname
    if(path === '/') {
    window.location.replace('/all')
   }
   else if(path  === '/ringtones') {
       getRingtones()
   }
   else if(path  === '/wallpapers') {
       getWallpapers()
    }
    else if(path  === '/all') {
        getRingtonesAndWallpapers()
    }
})

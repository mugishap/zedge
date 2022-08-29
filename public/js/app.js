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

        div.addEventListener('click', () => {
            window.location.pathname = `/ringtone/${element.id}`
        })

        const divStyles = ['rounded-lg', 'flex', 'aspect-[1/1.7]', 'bg-gradient-to-r', `from-[#${element.meta.gradientStart}]`, `to-[#${element.meta.gradientEnd}]`, 'items-center', 'justify-center', 'relative']

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
        const divStyles = ['rounded-lg', 'flex', 'aspect-[1/1.7]', `bg-[#${Math.floor(Math.random() * 16777215).toString(16)}]`, 'items-center', 'justify-center', 'relative']
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

        div.addEventListener('click', () => {
            window.location.pathname = `/wallpaper/${element.id}`
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
        const divStyles = element.contentType === 'RINGTONE' ? ['rounded-lg', 'aspect-[1/1.7]', 'flex', 'bg-gradient-to-r', `from-[#${element.meta.gradientStart}]`, `to-[#${element.meta.gradientEnd}]`, 'items-center', 'justify-center', 'relative'] : ['rounded-lg', 'flex', 'items-center', 'aspect-[1/1.7]', 'justify-center', 'relative']

        const imgStyles = ['rounded-lg', 'w-full', 'h-full']
        const img = document.createElement('img')
        const overlay = document.createElement('div')
        element.contentType === 'RINGTONE' ? overlay.innerHTML = `<span style='transform: scale(1.5);' id='ringtone-play-button' class=' cursor-pointer material-icons rounded-full text-white my-auto border-white border-2 p-[5px]'>play_arrow</span><span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>` : overlay.innerHTML = `<span class='text-white w-full px-3 pb-3 text-start'>${element.title}</span>`
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
        div.addEventListener('click', () => {
            element.contentType === 'RINGTONE' ? window.location.pathname = `/ringtone/${element.id}` : window.location.pathname = `/wallpaper/${element.id}`
        })
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
    if (path === '/') {
        window.location.replace('/all')
    }
    else if (path === '/ringtones') {
        getRingtones()
    }
    else if (path === '/wallpapers') {
        getWallpapers()
    }
    else if (path === '/all') {
        getRingtonesAndWallpapers()
    }
})


const getRingtone = async () => {
    const ringtoneID = window.location.pathname.split('/ringtone/')[1]
    console.log(ringtoneID)
    const api = await fetch('https://api-gateway.zedge.net/',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "query": "\n    query contentDownloadUrl($itemId: ID!) {\n      contentDownloadUrlAsUgc(itemId: $itemId)\n    }\n  ",
                    "variables": {
                        "itemId": ringtoneID
                    }
                }
            )
        }
    )
    const data = await api.json()
    console.log(data)


    document.title = 'Name of ringtone'

    const downloadButton = document.querySelector('.download-button')
    console.log(downloadButton)
    downloadButton.addEventListener('click', () => {
        window.location.replace(data.data.contentDownloadUrlAsUgc)
    })

    const creatorImage = document.querySelector('.creator-image')
    const creatorName = document.querySelector('.creator-name')
    const downloads = document.querySelector('.downloads')
    const ringtoneName = document.querySelector('.ringtone-name')
    const ringtoneImage = document.querySelector('.ringtone-image')


}


const getWallpaper = async () => {
    const wallpaperID = window.location.pathname.split('/wallpaper/')[1]
    console.log(wallpaperID)
    const api = await fetch('https://api-gateway.zedge.net/',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "query": "\n    query contentDownloadUrl($itemId: ID!) {\n      contentDownloadUrlAsUgc(itemId: $itemId)\n    }\n  ",
                    "variables": {
                        "itemId": wallpaperID
                    }
                }
            )
        }
    )
    const data = await api.json()
    console.log(data)

    document.title = 'Name of wallpaper'
    const downloadButton = document.querySelector('.download-button')
    console.log(downloadButton);
    downloadButton.addEventListener('click', () => {
        window.location.replace(data.data.contentDownloadUrlAsUgc)
    })
    const creatorImage = document.querySelector('.creator-image')
    const creatorName = document.querySelector('.creator-name')
    const downloads = document.querySelector('.downloads')
    const wallpaperName = document.querySelector('.wallpaper-name')
    const wallpaperImage = document.querySelector('.wallpaper-image')

}

const toggleMenu = () => {
    const menu = document.querySelector('.menu-nav')

    const div = document.createElement('div')
    const divStyles = ['menu-div', 'absolute', 'flex', 'w-screen', 'h-screen', 'left-0', 'top-0', 'bg-[#323c59cc]']
    const overlayDiv = document.createElement('div')
    const overlayDivStyles = ['z-[2]', 'w-screen', 'h-screen',]
    const whiteDiv = document.createElement('div')
    const whiteDivStyles = ['py-3', 'px-4', 'w-2/5', 'z-[4]', 'h-full', 'flex', 'flex-col', 'items-start', 'justify-start', 'bg-white', 'overflow-y-scroll']

    menu.addEventListener('click', () => {
        div.style.display = 'none'
    })

    document.body.append(div)
    div.append(overlayDiv)
    div.append(whiteDiv)

    overlayDiv.addEventListener('click', () => {
        div.style.display = 'none'
    })

    divStyles.forEach(style => {
        div.classList.add(style)
    })

    overlayDivStyles.forEach(style => {
        overlayDiv.classList.add(style)
    })

    whiteDivStyles.forEach(style => {
        whiteDiv.classList.add(style)
    })
    whiteDiv.innerHTML = `
    <span onclick="()=>{setDisplayNone()}" class='material-icons my-4'>close</span>
    <span class='font-light text-base text-slate-400 my-3'>Content</span>
    <ul>
    <li class='text-lg font-medium text-slate-700 my-1'><a href='/all'>Home</a></li>
    <li class='text-lg font-medium text-slate-700 my-1'><a href='/wallpapers'>Wallpapers</a></li>
    <li class='text-lg font-medium text-slate-700 my-1'><a href='/ringtones'>Ringtones</a></li>
    </ul>

    <span class='font-light text-base text-slate-400 my-3'>Share your content</span>
    <a class="flex items-center justify-center bg-purple-500 rounded-full w-32 py-2 px-3 text-white font-medium">Upload</a>

    <span class='font-light text-base text-slate-400 my-3'>Get the app</span>

    <div class='flex flex-col items-center justify-center'>
    <a class='w-32 my-2 mx-2' href='https://itunes.apple.com/app/apple-store/id1086101495?pt=1393449&mt=8'><img src='https://www.zedge.net/assets/8c4986ee4828b47d16f5cd694ef065f2.svg' alt='' /></a>
    <a class='w-32 my-2 mx-2' href='https://play.google.com/store/apps/details?id=net.zedge.android&referrer=utm_source%3Dzedge_net%26utm_medium%3Dweb'><img src='https://www.zedge.net/assets/21a267aba366f4957d18cde5a4bb0989.png' alt='' /></a>
    </div>


    `
}

const setDisplayNone = () => {
    const menuDiv = document.querySelector('.menu-div')
    menuDiv.style.display = 'none'
}

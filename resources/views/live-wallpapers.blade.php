<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Live Wallpapers - ZEDGE™</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    <link type="text/css" rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('images/download.png') }}">
</head>

<body class="w-screen h-screen ">
    <x-navbar></x-navbar>

    <div
        class="w-screen h-14 pt-[3px] pb-0 overflow-x-scroll shadow-[#555] shadow-sm bg-white flex items-center justify-center">
        <div
            class='cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2'>
            <a class="w-full h-full flex items-center justify-center" href="/all">All</a>
        </div>
        <div
            class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2">
            <a class="w-full h-full flex items-center justify-center" href="/wallpapers">Wallpapers</a>
        </div>
        <div
            class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center border-b-purple-500 px-3 text-center mx-2">
            <a class="w-full h-full flex items-center justify-center" href="/ringtones">Ringtones</a>
        </div>
        <div
            class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center border-b-4  border-b-purple-500 px-3 text-center mx-2">
            <a class="w-full h-full text-purple-500  flex items-center justify-center" href="/live-wallpapers">Live
                Wallpapers</a>
        </div>
    </div>
    <div class='w-full h-fit mt-8 flex items-center justify-start flex-col'>
        <h2 class='font-semibold text-xl my-4'>Live Wallpapers</h2>
        <span class='my-4 text-center'>
            Imagine having cool video effects as the background on your home screen. Download the <br> Zedge app and
            you've got it!
        </span>
        <div class='flex my-4 items-center justify-center'>
            <a class='mx-1'
                href="https://play.google.com/store/apps/details?id=net.zedge.android&referrer=utm_source%3Dzedge_net%26utm_campaign%3Dlive_wallpaper_page%26utm_medium%3Dweb"
                target="_blank" rel="noopener noreferrer"><img class='w-32'
                    src="https://www.zedge.net/assets/21a267aba366f4957d18cde5a4bb0989.png" alt=""></a>
            <a class='mx-1'
                href="https://itunes.apple.com/app/apple-store/id1086101495?pt=1393449&ct=live_wallpaper_page&mt=8"
                target="_blank" rel="noopener noreferrer"><img
                    src="https://www.zedge.net/assets/8c4986ee4828b47d16f5cd694ef065f2.svg" alt=""></a>
        </div>
        <div class='flex items-center justify-center my-4 w-full'>

            <img class='mx-2 w-36 rounded' src="https://www.zedge.net/assets/8970ae59bd163b79e3fea99867a08615.gif"
                alt="">
            <img class='mx-2 w-36 rounded' src="https://www.zedge.net/assets/201d9c786d6d9d76b5a2a8b1dc6fcbdb.gif"
                alt="">
            <img class='mx-2 w-36 rounded' src="https://www.zedge.net/assets/05641c8beedde67cf0693291a8f52af0.gif"
                alt="">
        </div>
        <div class=' flex flex-col items-center justify-start w-full'>
            <div class=" flex items-center justify-between w-6/12">
                <span class="bg-purple-500 rounded-full w-2 h-2"></span>
                <span class="w-11/12 text-start ">Our live wallpapers don't drain your battery - only plays once when
                    turning on your home
                    screen.
                </span>
            </div>
            <div class=" flex items-center justify-between w-6/12">
                <span class="bg-purple-500 rounded-full w-2 h-2"></span>
                <span class="w-11/12 text-start ">No need to install additional new live wallpapers - it's embedded in
                    the app.</span>
            </div>
            <div class=" flex items-center justify-between w-6/12">
                <span class="bg-purple-500 rounded-full w-2 h-2"></span>
                <span class="w-11/12 text-start ">Extensive catalog of quality live wallpapers for all tastes.</span>
            </div>
        </div>
    </div>
</body>

</html>
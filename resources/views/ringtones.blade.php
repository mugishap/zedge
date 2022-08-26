<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Ringtones - ZEDGE™</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    <link type="text/css" rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('images/download.png') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mui/3.7.1/js/mui.min.js" integrity="sha512-5LSZkoyayM01bXhnlp2T6+RLFc+dE4SIZofQMxy/ydOs3D35mgQYf6THIQrwIMmgoyjI+bqjuuj4fQcGLyJFYg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body class="w-screen h-screen ">
    <x-navbar></x-navbar>
    
    <div class="w-screen h-14 pt-[3px] pb-0 overflow-x-scroll shadow-[#555] shadow-sm bg-white flex items-center justify-center">
    <div class='cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2'><a class=" w-full h-full flex items-center justify-center" href="/all">All</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex items-center justify-center" href="/wallpapers">Wallpapers</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center border-b-4 border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex text-purple-500 items-center justify-center" href="/ringtones">Ringtones</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex items-center justify-center" href="/live-wallpapers">Live Wallpapers</a></div>
</div>

    <div class="ringtones-holder px-4 mt-4 card-holder w-screen grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 overflow-y-scroll">

    </div>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ringtones</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    <link type="text/css" rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
</head>

<body class="w-screen h-screen ">
    <x-navbar></x-navbar>
    
    <div class="w-screen h-14 py-[3px] shadow-[#555] shadow-md bg-white flex items-center justify-center">
    <div class='cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2'><a class=" w-full h-full flex items-center justify-center" href="/all">All</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center border-b-4 border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex text-purple-500 items-center justify-center" href="/ringtones">Ringtones</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex items-center justify-center" href="/wallpapers">Wallpapers</a></div>
    <div class="cursor-pointer text-lg text-slate-700 h-full flex items-center justify-center  border-b-purple-500 px-3 text-center mx-2"><a class="w-full h-full flex items-center justify-center" href="/live-wallpapers">Live Wallpapers</a></div>
</div>

    <div class="ringtones-holder mt-4 card-holder w-screen grid xl:grid-cols-5    md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 overflow-y-scroll">

    </div>
</body>

</html>
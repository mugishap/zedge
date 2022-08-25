<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Uploads</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
    <link type="text/css" rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('images/download.png') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mui/3.7.1/js/mui.min.js" integrity="sha512-5LSZkoyayM01bXhnlp2T6+RLFc+dE4SIZofQMxy/ydOs3D35mgQYf6THIQrwIMmgoyjI+bqjuuj4fQcGLyJFYg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body class='w-screen h-screen flex flex-col items-center justify-start text-[#555]'>
<x-navbar></x-navbar>
<div class='w-full bg-[#f5f5f5] h-72 flex flex-col items-center justify-end'>
    <div class=' w-1/3 h-3/5 flex flex-col items-center justify-end'>
        <div class='rounded-full h-24 w-24 my-4 bg-slate-200'>
            <img src="https://images.unsplash.com/photo-1535579710123-3c0f261c474e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class='w-full h-full object-cover rounded-full m-auto' alt="">
        </div>
        <div class='flex items-center justify-around w-2/3 mb-4'><span><span class='font-bold'> 2</span> items</span><span><span class='font-bold'> 10</span> downloads</span></div>
    </div>
    <div class='w-full h-12 flex items-center justify-center'>
    <div class='w-32 h-full border-b-2 flex items-center justify-center px-4  font-medium'>Content</div>
    <div class='w-32 h-full border-b-2 border-purple-500 flex items-center justify-center px-4 text-purple-500 font-medium'>Stats</div>
    </div>
</div>
</body>
</html>
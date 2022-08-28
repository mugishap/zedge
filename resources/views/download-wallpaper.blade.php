<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title class='document-title'>Loading...</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <script defer type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>
  <link type="text/css" rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
  <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('images/download.png') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body onload='getWallpaper()'>
  <x-navbar></x-navbar>
  <div class='w-screen flex px-8 my-3 justify-between items-center'>
    <div class='flex items-start pt-2 justify-center'>
      <img
        src="https://fsa.zobj.net/crop.php?r=XrHrAlBxGAoCPG81lpMw0ChQ9ZpkmGQuZfvO4jscjjkjCEKTNF6461ovAQVMRPBm11eRltyord2rMmbt9sjZK63yX3YSdMemzLKcSNa7vsZF85Ec4mDJ979Cf8jFmbdbAh2IAuuS5fTTpxtbRC6Sc08XVS3YGROpIplnCXfBa1IVZCL_Or43qhcWOWM"
        class=' mx-4 w-14 h-14 rounded-full object-cover' alt="">
      <div class='flex flex-col items-start justify-start'>
        <h2 class='text-xl font-medium'>Galaxy wallpaper</h2>
        <span class="text-slate-500 ">by JeanCR26</span>
      </div>
      <div class='justify-start flex flex pt-2 mx-3 text-slate-500  items-start flex'>
        <span class="material-icons">arrow_downward</span>
        <span>
          345482
        </span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button class="px-3 py-2 w-32 rounded-full mx-3 flex items-centers justify-center border-2 border-purple-500">
        <span class="material-icons text-lg text-purple-600 font-medium">
          share
        </span>
      </button>
      <button class="bg-purple-500 rounded-full w-32 py-2 px-3 text-white font-medium">Download</button>
    </div>
  </div>
  <div class="w-full px-3 flex items-center justify-start">
    <div class="mx-2 text-lg px-3 py-1 text-slate-700 font-medium text-base cursor-pointer text-center flex items-center justify-center bg-slate-200 rounded-full">Galaxy</div>
    <div class="mx-2 text-lg px-3 py-1 text-slate-700 font-medium text-base cursor-pointer text-center flex items-center justify-center bg-slate-200 rounded-full">Galaxy</div>
    <div class="mx-2 text-lg px-3 py-1 text-slate-700 font-medium text-base cursor-pointer text-center flex items-center justify-center bg-slate-200 rounded-full">Galaxy</div>
    <div class="mx-2 text-lg px-3 py-1 text-slate-700 font-medium text-base cursor-pointer text-center flex items-center justify-center bg-slate-200 rounded-full">Galaxy</div>
  </div>
  <img src="https://fsb.zobj.net/crop.php?r=wwhDocVdTV2IYcdj1Cy9aak7nkFHxb_2nb9KY3ZXGoomdcFGO5rJ8cWuskh7U17pMmxf8WaCox6jPkJDfPru3RD5m3A6zhVPeWlrmiUeb6lp7KY4wgaotLVpgCifAql2Ukj0c4Fln6eDOZj-72scXAHJscQLGc9CqoiWoIbpMAQc2Y91E9Oymw_adWBhkRSQ62ZrN19aYNQmdZFT" alt="" class="w-64 h-[60vh] my-4 mx-auto object-cover rounded">
</body>

</html>
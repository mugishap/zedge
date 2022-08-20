<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>
</head>
<body class="w-screen h-screen">
<x-navbar></x-navbar>
<x-tabs></x-tabs>
<div class="mt-4 card-holder w-screen grid xl:grid-cols-5    md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 overflow-y-scroll">
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card><x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card><x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card><x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
<x-card></x-card>
</div>
</body>
</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Clone Facebook</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        },
        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            line-height: 1.3;
        }
    </style>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
</head>
<body class="bg-white">
    <div id="app">
        <app-layout></app-layout>
    </div>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
</body>
</html>

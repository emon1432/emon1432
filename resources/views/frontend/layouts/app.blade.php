<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Khairul Islam</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('frontend') }}/images/favicon.ico">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/slick.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/slick-theme.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/aos.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/feature.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/style.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/iziToast.css">

</head>

<body class="template-color-1" data-spy="scroll" data-offset="70">
    @include('frontend.layouts.includes.header')
    @include('frontend.layouts.includes.mobile-menu')

    <main class="main-page-wrapper">
        @yield('content')
        @include('frontend.layouts.includes.arrow-up')
    </main>

    @include('frontend.layouts.includes.footer')

    <script src="{{ asset('frontend') }}/js/jquery.js"></script>
    <script src="{{ asset('frontend') }}/js/modernizer.min.js"></script>
    <script src="{{ asset('frontend') }}/js/feather.min.js"></script>
    <script src="{{ asset('frontend') }}/js/slick.min.js"></script>
    <script src="{{ asset('frontend') }}/js/bootstrap.min.js"></script>
    <script src="{{ asset('frontend') }}/js/bootstrap.js"></script>
    <script src="{{ asset('frontend') }}/js/text-type.js"></script>
    <script src="{{ asset('frontend') }}/js/wow.js"></script>
    <script src="{{ asset('frontend') }}/js/aos.js"></script>
    <script src="{{ asset('frontend') }}/js/main.js"></script>
    <script src="{{ asset('frontend') }}/js/iziToast.js"></script>
    @include('vendor.lara-izitoast.toast')

</body>

</html>

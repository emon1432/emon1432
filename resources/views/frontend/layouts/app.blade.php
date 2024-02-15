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
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/vendor/slick.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/vendor/slick-theme.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/vendor/aos.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/plugins/feature.css">
    <link rel="stylesheet" href="{{ asset('frontend') }}/css/style.css">
</head>

<body class="template-color-1" data-spy="scroll" data-offset="70">
    @include('frontend.layouts.includes.header')
    @include('frontend.layouts.includes.mobile-menu')

    <main class="main-page-wrapper">
        @yield('content')
        @include('frontend.layouts.includes.arrow-up')
    </main>

    @include('frontend.layouts.includes.footer')

    <script src="{{ asset('frontend') }}/js/vendor/jquery.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/modernizer.min.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/feather.min.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/slick.min.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/bootstrap.min.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/bootstrap.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/text-type.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/wow.js"></script>
    <script src="{{ asset('frontend') }}/js/vendor/aos.js"></script>
    <script src="{{ asset('frontend') }}/js/main.js"></script>
</body>

</html>

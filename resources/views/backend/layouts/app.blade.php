<!DOCTYPE html>
<html data-navigation-type="default" data-navbar-horizontal-shape="default" lang="en-US" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Phoenix</title>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('backend') }}/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('backend') }}/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('backend') }}/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('backend') }}/img/favicons/favicon.ico">
    <meta name="msapplication-TileImage" content="{{ asset('backend') }}/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">
    <script src="{{ asset('backend') }}/plugins/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/simplebar/simplebar.min.js"></script>
    <script src="{{ asset('backend') }}/js/config.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&amp;display=swap"
        rel="stylesheet">
    <link href="{{ asset('backend') }}/plugins/simplebar/simplebar.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('backend') }}/plugins/unicons/line.css">
    <link href="{{ asset('backend') }}/css/theme-rtl.min.css" type="text/css" rel="stylesheet" id="style-rtl">
    <link href="{{ asset('backend') }}/css/theme.min.css" type="text/css" rel="stylesheet" id="style-default">
    <link href="{{ asset('backend') }}/css/user-rtl.min.css" type="text/css" rel="stylesheet" id="user-style-rtl">
    <link href="{{ asset('backend') }}/css/user.min.css" type="text/css" rel="stylesheet" id="user-style-default">
    <script>
        var linkRTL = document.getElementById('style-rtl');
        var userLinkRTL = document.getElementById('user-style-rtl');
        linkRTL.setAttribute('disabled', true);
        userLinkRTL.setAttribute('disabled', true);
    </script>
    <link href="{{ asset('backend') }}/plugins/leaflet/leaflet.css" rel="stylesheet">
    <link href="{{ asset('backend') }}/plugins/leaflet.markercluster/MarkerCluster.css" rel="stylesheet">
    <link href="{{ asset('backend') }}/plugins/leaflet.markercluster/MarkerCluster.Default.css" rel="stylesheet">
</head>

<body>
    <main class="main" id="top">
        @include('backend.layouts.includes.sidebar')
        @include('backend.layouts.includes.topbar')
        <div class="content">
            @yield('content')
            @include('backend.layouts.includes.footer')
        </div>
        @include('backend.layouts.includes.support-chat')
    </main>
    <script src="{{ asset('backend') }}/plugins/popper/popper.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/anchorjs/anchor.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/is/is.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/fontawesome/all.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/lodash/lodash.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/polyfill/polyfill.min58be.js?features=window.scroll"></script>
    <script src="{{ asset('backend') }}/plugins/list.js/list.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/feather-icons/feather.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/dayjs/dayjs.min.js"></script>
    <script src="{{ asset('backend') }}/js/phoenix.js"></script>
    <script src="{{ asset('backend') }}/plugins/echarts/echarts.min.js"></script>
    <script src="{{ asset('backend') }}/plugins/leaflet/leaflet.js"></script>
    <script src="{{ asset('backend') }}/plugins/leaflet.markercluster/leaflet.markercluster.js"></script>
    <script src="{{ asset('backend') }}/plugins/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js">
    </script>
    <script src="{{ asset('backend') }}/js/ecommerce-dashboard.js"></script>
</body>




</html>

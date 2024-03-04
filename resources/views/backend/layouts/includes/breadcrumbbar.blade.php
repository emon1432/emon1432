<div class="breadcrumbbar">
    <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
            <h4 class="page-title">@yield('page-title')</h4>
            <div class="breadcrumb-list">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Home</a></li>
                    @php
                        $section_title = explode('-', $__env->yieldContent('section-title'));
                    @endphp
                    @if ($section_title)
                        @foreach ($section_title as $section_title)
                            @if ($section_title != '')
                                <li class="breadcrumb-item"><a href="javaScript:void();">{{ $section_title }}</a></li>
                            @endif
                        @endforeach
                    @endif
                    <li class="breadcrumb-item active" aria-current="page">@yield('page-title')</li>
                </ol>
            </div>
        </div>
        <div class="col-md-4 col-lg-4">
            <div class="widgetbar">
                @yield('action-button')
            </div>
        </div>
    </div>
</div>

<div class="leftbar">
    <div class="sidebar">
        <div class="logobar">
            <a href="{{ route('dashboard') }}" class="logo logo-large">
                <img src="{{ asset('backend') }}/images/logo.png" class="img-fluid" alt="logo">
            </a>
            <a href="{{ route('dashboard') }}" class="logo logo-small">
                <img src="{{ asset('backend') }}/images/small_logo.png" class="img-fluid" alt="logo">
            </a>
        </div>

        <div class="navigationbar">
            <ul class="vertical-menu">
                <li>
                    <a href="{{ route('dashboard') }}">
                        <img src="{{ asset('backend') }}/images/svg-icon/dashboard.svg" class="img-fluid"
                            alt="dashboard"><span>Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

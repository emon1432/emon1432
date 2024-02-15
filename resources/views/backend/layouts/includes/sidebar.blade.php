<nav class="navbar navbar-vertical navbar-expand-lg">
    <script>
        var navbarStyle = window.config.config.phoenixNavbarStyle;
        if (navbarStyle && navbarStyle !== 'transparent') {
            document.querySelector('body').classList.add(`navbar-${navbarStyle}`);
        }
    </script>
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">

        <div class="navbar-vertical-content">
            <ul class="navbar-nav flex-column" id="navbarVerticalNav">
                <li class="nav-item">
                    <div class="nav-item-wrapper">
                        <a class="nav-link label-1" href="{{ route('dashboard') }}" role="button" data-bs-toggle=""
                            aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span data-feather="home">
                                    </span>
                                </span>
                                <span class="nav-link-text-wrapper">
                                    <span class="nav-link-text">
                                        Dashboard
                                    </span>
                                </span>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <p class="navbar-vertical-label">Protfolio</p>
                    <div class="nav-item-wrapper">
                        <a class="nav-link label-1" href="#" role="button" data-bs-toggle=""
                            aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span data-feather="home">
                                    </span>
                                </span>
                                <span class="nav-link-text-wrapper">
                                    <span class="nav-link-text">
                                        Home
                                    </span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="nav-item-wrapper">
                        <a class="nav-link label-1" href="#" role="button" data-bs-toggle=""
                            aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span data-feather="home">
                                    </span>
                                </span>
                                <span class="nav-link-text-wrapper">
                                    <span class="nav-link-text">
                                        Protfolio
                                    </span>
                                </span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="navbar-vertical-footer"><button
            class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span
                class="uil uil-left-arrow-to-left fs-8"></span><span class="uil uil-arrow-from-right fs-8"></span><span
                class="navbar-vertical-footer-text ms-2">Collapsed View</span></button></div>
</nav>

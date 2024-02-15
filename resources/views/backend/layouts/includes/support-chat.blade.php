<div class="support-chat-container">
    <div class="container-fluid support-chat">
        <div class="card bg-body-emphasis">
            <div class="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
                <h5 class="mb-0 d-flex align-items-center gap-2">Demo widget<span
                        class="fa-solid fa-circle text-success fs-11"></span></h5>
                <div class="btn-reveal-trigger"><button
                        class="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button"
                        id="support-chat-dropdown" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true"
                        aria-expanded="false" data-bs-reference="parent"><span
                            class="fas fa-ellipsis-h text-body"></span></button>
                    <div class="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown"><a
                            class="dropdown-item" href="#!">Request a callback</a><a class="dropdown-item"
                            href="#!">Search in
                            chat</a><a class="dropdown-item" href="#!">Show history</a><a class="dropdown-item"
                            href="#!">Report
                            to Admin</a><a class="dropdown-item btn-support-chat" href="#!">Close
                            Support</a></div>
                </div>
            </div>
            <div class="card-body chat p-0">
                <div class="d-flex flex-column-reverse scrollbar h-100 p-3">
                    <div class="text-end mt-6"><a
                            class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                            href="#!">
                            <p class="mb-0 fw-semibold fs-9">I need help with something</p><span
                                class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                        </a><a
                            class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                            href="#!">
                            <p class="mb-0 fw-semibold fs-9">I can’t reorder a product I previously ordered
                            </p><span class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                        </a><a
                            class="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                            href="#!">
                            <p class="mb-0 fw-semibold fs-9">How do I place an order?</p><span
                                class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                        </a><a
                            class="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                            href="#!">
                            <p class="mb-0 fw-semibold fs-9">My payment method not working</p><span
                                class="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                        </a></div>
                    <div class="text-center mt-auto">
                        <div class="avatar avatar-3xl status-online"><img
                                class="rounded-circle border border-3 border-light-subtle"
                                src="{{ asset('backend') }}/img/team/30.webp" alt="" />
                        </div>
                        <h5 class="mt-2 mb-3">Eric</h5>
                        <p class="text-center text-body-emphasis mb-0">Ask us anything – we’ll get back to
                            you here or by email
                            within 24 hours.</p>
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
                <div class="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
                    <input class="form-control outline-none border-0 flex-1 fs-9 px-0" type="text"
                        placeholder="Write message" /><label
                        class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" for="supportChatPhotos"><span
                            class="fa-solid fa-image"></span></label><input class="d-none" type="file"
                        accept="image/*" id="supportChatPhotos" /><label
                        class="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" for="supportChatAttachment">
                        <span class="fa-solid fa-paperclip"></span></label><input class="d-none" type="file"
                        id="supportChatAttachment" />
                </div><button class="btn p-0 border-0 send-btn"><span
                        class="fa-solid fa-paper-plane fs-9"></span></button>
            </div>
        </div>
    </div><button class="btn p-0 border border-translucent btn-support-chat"><span
            class="fs-8 btn-text text-primary text-nowrap">Chat demo</span><span
            class="fa-solid fa-circle text-success fs-9 ms-2"></span><span
            class="fa-solid fa-chevron-down text-primary fs-7"></span></button>
</div>

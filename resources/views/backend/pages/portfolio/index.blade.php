@extends('backend.layouts.app')
@section('content')
    <div class="row gx-6 gy-3 mb-4 align-items-center">
        <div class="col-auto">
            <h2 class="mb-0">
                Projects
                <span class="fw-normal text-body-tertiary ms-3">(32)</span>
            </h2>
        </div>
        <div class="col-auto flex-1 d-flex justify-content-end">
            <a class="btn btn-primary px-5" href="{{ route('portfolios.create') }}">
                <span class="fa-solid fa-plus me-2"></span>
                Add new project
            </a>
        </div>
    </div>
    <div class="row g-3 mb-9 mt-5">
        <div class="col-12 col-sm-6 col-md-4 col-xxl-3">
            <div class="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style="height: 236px;">
                <div class="bg-holder"
                    style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url({{ asset('backend') }}/img/generic/51.png)">
                </div>
                <div class="position-relative h-100 d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge badge-phoenix fs-10 badge-phoenix-primary" data-bs-theme="light">Ongoing</span>
                        <div class="z-2">
                            <button class="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none"
                                data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"
                                data-bs-reference="parent">
                                <span class="fas fa-ellipsis-v"></span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end py-2">
                                <a class="dropdown-item" href="#!">View</a>
                                <a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#!">Remove</a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-white fw-bold line-clamp-2">Project Doughnut Dungeon</h3>
                </div>
                <a class="stretched-link" href="#projectsBoardViewModal" data-bs-toggle="modal"></a>
            </div>
        </div>
    </div>
    <div class="modal fade" id="projectsBoardViewModal" tabindex="-1" aria-labelledby="projectsBoardViewModal"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content overflow-hidden">
                <div class="modal-header position-relative p-0"><input class="d-none" id="projectModalTwoCoverInput"
                        type="file" /><label class="position-absolute top-0 start-0"
                        for="projectModalTwoCoverInput"><span
                            class="project-modal-btn d-inline-block bg-body-emphasis dark__text-white rounded-2 py-2 px-3 fs-9 fw-bolder mt-3 ms-3 cursor-pointer"><span
                                class="fa-solid fa-image me-1"></span>Change</span></label><button
                        class="btn btn-circle project-modal-btn position-absolute end-0 top-0 mt-3 me-3 bg-body-emphasis"
                        data-bs-dismiss="modal"><span
                            class="fa-solid fa-xmark text-body dark__text-white"></span></button><img class="w-100"
                        src="{{ asset('backend') }}/img/generic/43.png" alt=""
                        style="max-height: 280px;min-height: 150px;" /></div>
                <div class="modal-body p-0">
                </div>
            </div>
        </div>
    </div>
@endsection

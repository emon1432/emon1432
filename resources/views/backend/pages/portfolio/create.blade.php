@extends('backend.layouts.app')
@push('styles')
    <link href="{{ asset('backend') }}/plugins/dropzone/dropzone.min.css" rel="stylesheet">
@endpush
@section('content')
    <h2 class="mb-4">Create a portfolio</h2>
    <div class="row">
        <div class="col-xl-12">
            <form class="row g-3 mb-6 needs-validation" novalidate="novalidate" action="{{ route('portfolios.store') }}"
                method="POST" enctype="multipart/form-data">
                @csrf
                <div class="col-sm-12 col-md-12">
                    <div class="form-floating">
                        <input class="form-control" id="floatingInputPortfolioTitle" type="text"
                            placeholder="Portfolio title" name="title" value="{{ old('title') }}" required />
                        <label for="floatingInputPortfolioTitle">Portfolio title</label>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="form-floating">
                        <input class="form-control" id="floatingInputCategory" type="text" placeholder="Category"
                            name="category" value="{{ old('category') }}" required />
                        <label for="floatingInputCategory">Category</label>
                    </div>
                </div>
                <div class="col-sm-6 col-md-8">
                    <div class="form-floating">
                        <input class="form-control" id="floatingInputUrl" type="text" placeholder="URL" name="url"
                            value="{{ old('url') }}" required />
                        <label for="floatingInputUrl">URL</label>
                    </div>
                </div>

                <div class="col-12 gy-6">
                    <div class="form-floating">
                        <textarea class="form-control" id="floatingPortfolioDescription" placeholder="Portfolio description" name="description"
                            style="height: 100px;" required>{{ old('description') }}</textarea>
                        <label for="floatingProjectOverview">project overview</label>
                    </div>
                </div>
                <div class="col-2 gy-6">
                    <label for="floatingPortfolioThumbnail" class="form-label mb-3">Thumbnail</label>
                    <div class="d-flex align-items-end position-relative mb-7">
                        <input class="d-none" id="upload-avatar" type="file"
                            onchange="document.querySelector('.preview').src = window.URL.createObjectURL(this.files[0])"
                            name="thumbnail" required />
                        <div class="hoverbox" style="width: 150px; height: 150px">
                            <div class="hoverbox-content rounded-circle d-flex flex-center z-1"
                                style="--phoenix-bg-opacity: .56;">
                                <span class="fa-solid fa-camera fs-1 text-body-quaternary"></span>
                            </div>
                            <div
                                class="position-relative bg-body-quaternary rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
                                <div class="avatar avatar-5xl">
                                    <img class="rounded-circle preview" src="" alt="" />
                                </div>
                                <label class="w-100 h-100 position-absolute z-1" for="upload-avatar"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 gy-6">
                    <div class="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone="data-dropzone">
                        <div class="fallback">
                            <input name="file" type="file" multiple="multiple" />
                        </div>
                        <div class="dz-preview d-flex flex-wrap">
                            <div class="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2"
                                style="height:80px;width:80px;">
                                <img class="dz-image" src="{{ asset('backend') }}/img/products/23.png" alt="..."
                                    data-dz-thumbnail="data-dz-thumbnail" />
                                <a class="dz-remove text-body-quaternary" href="#!" data-dz-remove="data-dz-remove">
                                    <span data-feather="x"></span>
                                </a>
                            </div>
                        </div>
                        <div class="dz-message text-body-tertiary text-opacity-85" data-dz-message="data-dz-message">
                            Drag your photo here
                            <span class="text-body-secondary px-1">or</span>
                            <button class="btn btn-link p-0" type="button">Browse from device</button>
                            <br />
                            <img class="mt-3 me-2" src="{{ asset('backend') }}/img/icons/image-icon.png" width="40"
                                alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-4 gy-6">
                    <select class="form-select" data-choices="data-choices" multiple="multiple"
                        data-options='{"removeItemButton":true,"placeholder":true}' name="technologies[]" required>
                        <option value="">Select Technologies</option>
                        <option>Stupidity</option>
                        <option>Jerry</option>
                        <option>Not_the_mouse</option>
                        <option>Rick</option>
                        <option>Biology</option>
                        <option>Neurology</option>
                        <option>Brainlessness</option>
                    </select>
                </div>
                <div class="col-12 gy-6">
                    <div class="row g-3 justify-content-end">
                        <div class="col-auto"><button class="btn btn-phoenix-primary px-5">Cancel</button></div>
                        <div class="col-auto"><button class="btn btn-primary px-5 px-sm-15">Create Project</button></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@push('scripts')
    <script src="{{ asset('backend') }}/plugins/dropzone/dropzone.min.js"></script>
@endpush

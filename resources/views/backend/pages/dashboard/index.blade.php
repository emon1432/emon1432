@extends('backend.layouts.app')
@section('page-title', 'Dashboard')
@section('content')
    <div class="row">
        <div class="col-lg-12 col-xl-12">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card m-b-30">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col-9">
                                    <h5 class="card-title mb-0">Revenue Statistics</h5>
                                </div>
                                <div class="col-3">
                                    <div class="dropdown">
                                        <button class="btn btn-link p-0 font-18 float-right" type="button"
                                            id="widgetRevenue" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false"><i class="feather icon-more-horizontal-"></i></button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="widgetRevenue">
                                            <a class="dropdown-item font-13" href="#">Refresh</a>
                                            <a class="dropdown-item font-13" href="#">Export</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body py-0">
                            <div class="row align-items-center">
                                <div class="col-lg-3">
                                    <div class="revenue-box border-bottom mb-2">
                                        <h4>+ 4598</h4>
                                        <p>Inward Amount</p>
                                    </div>
                                    <div class="revenue-box">
                                        <h4>- 296</h4>
                                        <p>Outward Amount</p>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div id="apex-line-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

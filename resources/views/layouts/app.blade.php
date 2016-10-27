<!doctype html>
<html lang="en">

@section('htmlheader')
   @include('partials.htmlheader')
@show
{{--Si no és diu res d'utilitza aquesta, sino la que es dóna a la secció-show--}}


<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper" id ="app">

    @include('partials.mainheader')

    @include('partials.sidebar')

    <div class="content-wrapper">
        @include('partials.contentheader')
        <section class="content">
            @yield('content')
        </section>

    </div>

    @include('partials.controlsidebar')

    @include('partials.footer')

</div>

@section('scripts')
    @include('partials.scripts')
@show

</body>
</html>
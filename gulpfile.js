const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .less('app-less.less')
       .less('./node_modules/admin-lte/build/less/AdminLTE.less','./public/css/adminlte-less.css')
       .styles([
           './public/css/app.css',
           './public/css/app-less.css',
           './node_modules/admin-lte/dist/css/skins/_all-skins.css',
           './public/css/adminlte-less.css'

       ])
       .copy('node_modules/font-awesome/fonts/*.*','public/fonts/')
       .copy('node_modules/ionicons/dist/fonts/*.*','public/fonts/')
       .copy('node_modules/admin-lte/bootstrap/fonts/*.*','public/fonts/bootstrap')
       .copy('node_modules/admin-lte/dist/img','public/img')
       .webpack('app.js');
});

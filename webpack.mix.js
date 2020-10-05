const mix = require('laravel-mix');

const assets = 'assets';
const dist = 'dist';

mix.setPublicPath(dist);
mix.setResourceRoot('../');

// SASS
mix
	.sass(`${assets}/css/wpbe.scss`, `${dist}/css`)
	.sass(`${assets}/js/plugins/codemirror/code.scss`, `${dist}/js/plugins/codemirror`)

// Javascript
mix
	.autoload({
		'jquery': ['window.$', 'window.jQuery']
	})
	.js(`${assets}/js/admin.js`, `${dist}/js`)
	.js(`${assets}/js/plugins/codemirror/plugin.js`, `${dist}/js/plugins/codemirror`)
	.js(`${assets}/js/plugins/codemirror/code.js`, `${dist}/js/plugins/codemirror`)
	.copy(`${assets}/js/plugins/codemirror/source.html`, `${dist}/js/plugins/codemirror`)
	.js(`${assets}/js/plugins/fullpage.js`, `${dist}/js/plugins`);

// Source maps when not in production.
if (!mix.inProduction()) {
	mix.sourceMaps();
}

// Hash and version files in production.
if (mix.inProduction()) {
	mix.version();
}

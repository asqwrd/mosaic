define({
	app_name:"appname",
	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'emberModel': {
			deps: ["ember"],
		
		},
		'parse': {
			deps: ["emberModel","jquery"],
			exports: 'Parse'
		
		},
		'jquery': {
			exports: 'jQuery'
		
		},
		'greensock': {
			deps: ['jquery']
		},
		'menu': {
			deps: ['classie','modernizr']
		},
		'jquery.easing': {
			deps: ['jquery'],
		},
		'jquery.mobile': {
			deps: ['jquery'],
		},
		'swiper': {
			deps: ['jquery'],
		},
		/*'layersliderTrans': {
			deps: ['layerslider'],
		},*/
		'helper': {
			deps: ['modernizr'],
		},
		'grid3d': {
			deps: ['classie','helper'],
			
		}
		
	},
	paths :{
		'App' 					: 'application/application',
		'models' 				: 'models',
		'adapters' 				: 'adapters',
		'router' 				: 'router',
		'components' 		: 'components',
		'views' 				: 'views',
		'controllers' 			: 'controllers',
		'templates' 			: 'templates',
		'jquery' 				: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
		'modernizr' 			: 'lib/modernizr.custom',
		'handlebars' 			: 'lib/handlebars',
		'ember' 				: 'lib/ember',
		'classie' 				: 'lib/classie',
		'helper' 				: 'lib/helper',
		'grid3d' 				: 'lib/grid3d',
		'greensock' 			: 'lib/greensock',
		'swiper' 				: 'lib/swiper',
		'froogaloop' 			: 'http://a.vimeocdn.com/js/froogaloop2.min',
		'parse' 				: 'lib/ember-model-parse-adapter',
		'menu' 					: 'lib/menu',
		'emberModel' 			: 'lib/ember-model-latest',
		'jquery.mobile' 		: 'lib/jquery.mobile.customized.min',
		'jquery.easing' 		: 'lib/jquery.easing.1.3',
		'fitvids' 				: 'lib/plugins/jquery.fitvids',
		'text' 					: 'lib/text',
		'hbs' 					: 'lib/hbs',
		'domReady' 				: 'lib/domReady',
		'easyXDM' 				: 'lib/easyXDM.min'
	},
	hbs: {
		disableI18n: true,
		templateExtensions: "html"
	}
});
/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#x21;',
			'icon-facebook-2' : '&#x22;',
			'icon-twitter' : '&#x23;',
			'icon-twitter-2' : '&#x24;',
			'icon-twitter-3' : '&#x25;',
			'icon-users' : '&#x26;',
			'icon-users-2' : '&#x27;',
			'icon-film' : '&#x28;',
			'icon-play' : '&#x29;',
			'icon-film-2' : '&#x2a;',
			'icon-camera' : '&#x2b;',
			'icon-google-plus' : '&#x2c;',
			'icon-google-plus-2' : '&#x2d;',
			'icon-google-plus-3' : '&#x2e;',
			'icon-question' : '&#x2f;',
			'icon-signup' : '&#x30;',
			'icon-paypal' : '&#x31;',
			'icon-heart' : '&#x32;',
			'icon-arrow-down-alt1' : '&#x33;',
			'icon-alarm' : '&#x34;',
			'icon-eye' : '&#x35;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
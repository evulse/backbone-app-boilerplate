/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*!
 * jQuery SuperCookie v1
 *
 * https://github.com/tantau-horia/jquery-SuperCookie
 *
 * Copyright 2012, Tantau Horia
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
;(function ($, window, document, undefined) {
  //golbal option for jquery.cookie
	var globalOptions = {
		expires: 7,
		path: "/"
	};
	var methods = {};
	$.cookies = function (globalConfig) {
		$.extend(globalOptions, globalConfig);
		$.extend(this, methods);
		return this;
	};
	methods = {
		//create cookie
		create: function (name, values, config) {
			var options = $.extend({}, globalOptions, config);
			$.cookie( name, JSON.stringify(values), options );
		},
		//verify if cookie exists
		check: function (name) {
			if ( name !== null && name !== undefined ) {
				var get_mc = $.cookie(name);
				if ( get_mc === null ) {
					return false;
				}
				return true;
			} else {
				return false;
			}
		},
		//verify cookie json and existence
		verify: function (name) {
			if ( name !== null && name !== undefined ) {
				var get_mc = $.cookie(name);
				if ( get_mc === null ) {
					return false;
				}
				if ( jQuery.isEmptyObject(get_mc) ) {
					return false;
				}
				try{
					JSON.parse(get_mc);
				} catch (e) {
					return false;
				}
				return true;
			} else {
				return false;
			}
		},
		//verify index existence
		check_index: function (name, index_s) {
			var get_mc = $.cookies().read_JSON(name);
			var check = null;
			$.each( get_mc, function(index,value){
				if ( index_s === index ) {
					check = "ok";
				}
			});
			if ( check === null ) {
				return false;
			} else {
				return true;
			}
		},
		//read all cookie values
		read_values: function (name) {
			if ( !$.cookies().verify(name) ) {
				return false;
			} else {
				return $.cookie(name);
			}
		},
		//read all JSON indexes as an array
		read_indexes: function (name) {
			var get_mc = $.cookies().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				check.push( index );
			});
			return check;
		},
		//read cookie json
		read_JSON: function (name) {
			if ( !$.cookies().verify(name) ) {
				return false;
			} else {
				return JSON.parse($.cookie(name));
			}
		},
		//read cookie value from field
		read: function (name, index_s) {
			var get_mc = $.cookies().read_JSON(name);
			var check = null;
			$.each( get_mc, function(index,value){
				if ( index_s == index ) {
					check = value;
				}
			});
			if ( check === null ) {
				return false;
			} else {
				return check;
			}
		},
		//replace cookie value from field
		replace: function (name, index_s, new_value, config) {
			var get_mc = $.cookies().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				if ( index_s === index ) {
					field = "\"" + index + "\": \"" + new_value + "\"";
					check.push( field );
				} else {
					check.push( field );
				}
			});
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		},
		//add cookie field and value
		add: function (name, new_index, new_value, config) {
			var get_mc = $.cookies().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				check.push( field );
			});
			check.push("\"" + new_index + "\": \"" + new_value + "\"");
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		},
		//remove cookie field and value
		remove: function (name, remove_index, config) {
			var get_mc = $.cookies().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				if ( remove_index !== index ) {
					check.push( field );
				}
			});
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		}
	};

 })(jQuery, document);
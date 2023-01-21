var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Licence: http://jerning.com/license.txt */
(function(b){function e(a,c){var d;if(b.isPlainObject(a))d=a;else try{d=b.parseJSON(a)}catch(f){d=b.parseJSON('{"'+a+'":'+c+"}")}return d}function h(a,c){var d="";b(a).replaceWith(b.map(a.nodeValue.split("").reverse(),function(a,e){var g=a;b.each(c,function(c,e){d==c[1]&&a==c[0]&&(g=b.fn.wrapCharacter(a,e))});d=a;return g}).reverse().join(""))}b.fn.wrapCharacter=function(a,b){return'<span style="letter-spacing:'+b+'em">'+a+"</span>"};b.fn.jerning=function(a,c){var d=e(a,c),f=this.contents();b.each(f,
function(a,c){1==c.nodeType&&b(c).jerning(d);3==c.nodeType&&h(c,d)});return this}})(jQuery);

}
/*
     FILE ARCHIVED ON 08:26:21 Aug 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:08:05 Jan 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 177.743
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.075
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 144.053 (3)
  PetaboxLoader3.datanode: 63.396 (4)
  CDXLines.iter: 19.397 (3)
  PetaboxLoader3.resolve: 160.649 (3)
  load_resource: 113.654
*/
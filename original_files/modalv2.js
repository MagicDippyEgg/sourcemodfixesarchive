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

var g_fnModalDismissHandler = false;
var g_bIsMobileController = false;

function showGotSteamModal( contentEl, steamURL, appName )
{
	$('gotSteam_SteamURL').href = steamURL;
	$('gotSteam_AppName').update( appName );
	showModal( contentEl );
}

function showContentAsModal( idModal, elContent, bExplicitDismissalOnly )
{
	var elModal = $(idModal);
	var elModalContent = elModal.down('.modal_box_ctn');

	if ( elContent.parentNode != elModalContent )
	{
		if ( elContent.parentNode )
			elContent.remove();

		elModalContent.appendChild( elContent );
	}
	elContent.siblings().invoke('hide');
	elContent.show();
	
	showModal( elModal, bExplicitDismissalOnly );
}

function showModal( contentEl, bExplicitDismisalOnly, bIgnoreResizeAndScrollEvents )
{
	var cEl = $(contentEl);
	if ( cEl.is_visible_modal )
	{
		modalSizing( cEl, true );
		return;
	}

	var bgEl = $('modalBG');
	if(!bgEl)
	{
		bgEl = document.createElement('div');
		$J(document.body ).append(bgEl);
		bgEl.id = 'modalBG';
	}
	if ( bgEl.effect )
		bgEl.effect.cancel();
	bgEl.setOpacity( 0 );
	bgEl.effect = new Effect.Appear( bgEl, { from: 0.0, to: 0.7, duration: 0.4 } );


	// make sure we're save to position relative to body
	if ( cEl.parentNode != document.body )
		$(document.body).appendChild( cEl );

	cEl.show();

	if ( !g_bIsMobileController )
	{
		modalSizing( cEl, true );

		cEl.sizingListener = modalSizing.bind( null, cEl, false );
	}

	// skip registering the resize/scroll events on iphone as we don't calculate the position correctly
	if ( !Prototype.Browser.MobileSafari && !g_bIsMobileController && ( bIgnoreResizeAndScrollEvents == null || bIgnoreResizeAndScrollEvents == false ) )
	{
		Event.observe( window, 'resize', cEl.sizingListener );
		Event.observe( window, 'scroll', cEl.sizingListener );
	}
	
	if ( !bExplicitDismisalOnly )
	{
		cEl.identify(); 	//ask prototype to generate an id
		(function () {
			g_fnModalDismissHandler = RegisterPopupDismissal( hideModal.bind( null, cEl ), cEl, true );
		}).defer();
	}

	cEl.is_visible_modal = true;
}

function modalSizing( cEl, bFirst )
{
	var flInverseZoom = 1 / (document.body.style.zoom || 1);
	var w = document.viewport.getWidth() * flInverseZoom;
	var h = document.viewport.getHeight() * flInverseZoom;
	var sl = document.viewport.getScrollOffsets().left;
	var st = document.viewport.getScrollOffsets().top;

	var cw = cEl.offsetWidth;
	var ch = cEl.offsetHeight;


	var t = (Math.floor((h / 2) - (ch / 2)) + st);
	var l = (Math.floor((w / 2) - (cw / 2)) + sl);

	if ( ch < document.viewport.getHeight() )
		cEl.style.top = (t < 0 ? 0 : t) + 'px';
	else if ( bFirst )
		cEl.style.top = st + 'px';

	if ( cw < document.viewport.getWidth() )
		cEl.style.left = (l < 0 ? 0 : l ) + 'px';
	else if ( bFirst )
		cEl.style.left = sl + 'px';
}

function hideModal(contentEl)
{
	var cEl = $(contentEl);

	if ( !cEl.is_visible_modal )
		return;
	
	var bgEl = $('modalBG');
	if ( bgEl.effect )
		bgEl.effect.cancel();
	bgEl.effect = new Effect.Fade( bgEl, { duration: 0.2 } );
	cEl.hide();
	
	currentModal = false;


	if ( !Prototype.Browser.MobileSafari )
	{
		Event.stopObserving( window, 'resize', cEl.sizingListener );
		Event.stopObserving( window, 'scroll', cEl.sizingListener );
	}
	if ( g_fnModalDismissHandler ) 
	{
		g_fnModalDismissHandler.unregister();
		g_fnModalDismissHandler = false;
	}
	
	if ( cEl.OnModalDismissal )
		cEl.OnModalDismissal();

	cEl.is_visible_modal = false;
}

function modalAlert(msg)
{
	modalEl = document.getElementById('modalAlert');
	if(modalEl)
	{
		for(x=0;x<modalEl.childNodes.length;x++)
		{
			modalEl.removeChild(modalEl.childNodes[x]);
		}
		modalEl.parentNode.removeChild(modalEl);
	}
	
	modalEl = document.createElement('div');
	
}



}
/*
     FILE ARCHIVED ON 06:07:45 May 31, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:28:44 Jul 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.491
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 142.995
  LoadShardBlock: 850.614 (6)
  PetaboxLoader3.datanode: 639.641 (7)
  load_resource: 103.99
*/
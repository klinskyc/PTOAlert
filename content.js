var test;

var taburl = location.hostname

if(taburl.indexOf("www.") >= 0)
{

	taburl = taburl.substring(taburl.indexOf('www.')+4,taburl.length);
}

chrome.storage.local.get("siteList", function (obj) {
	var siteList = obj.siteList.data;
	var testSite = siteList[taburl];
	if(testSite != undefined && $.cookie(testSite.site) == undefined)
	{
		$('body').prepend('<div id="PTO-ALERT">This site is listed on plaintextoffenders.com!<br> (Learn more <a href="' +	testSite.link + '" target="_blank">here</a>)<a id="PTO-X" title="Dismiss this message for 10 days">X</a></div>');
		$("#PTO-X").click(function(){
			$("#PTO-ALERT").remove();
			$.cookie(testSite.site, "acknowledged", { expires : 10 });
		});		
	}
});	
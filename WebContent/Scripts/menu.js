var submenu0 = ["'./'","Home"];
var submenu1 = ["'./'","'./VisualStorage/Photos/logo1.png'","./","Under Construction","./","Under Construction","./","Under Construction","./","Under Construction","#","links"];
var submenu2 = ["'./'","'./VisualStorage/Photos/logo2_text.png'","./","Under Construction","./","Under Construction","./","Under Construction","./","Under Construction","#","links"];
var submenu3 = ["'./'","'./VisualStorage/Photos/logo3.png'","./","Under Construction","./","Under Construction","./","Under Construction","./","Under Construction","#","links"];
var submenu4 = ["'./'","Under Construction"];

var pageheader = "	<header>"
+"						<!--<h1><a id=title href='./'>Logo <span id='h1w2'>Here</span></a></h1>-->"
+"						<a href = './'><img id = 'logo' src = './VisualStorage/Photos/logo_main3.png' style = 'width:60%; height:60%; margin:0px;'></a>"
+"					</header>"
+"					<nav>"
+"						<script>document.write(menu)</script>"
+"					</nav>";

var pagefooter = "	<footer id=footer>"
+"						<p>Daniel B. 301770640 - Shenkar Academy &copy</p>"
+"					</footer>";

var menu = "<ul id=menu>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href="+submenu1[0]+" id = 'ffs'><img src="+submenu1[1]+"></a>"
+"					<ul>"
+"						<li style='display:none'><a href="+submenu1[0]+"><img src="+submenu1[1]+"></a>"
+"						<li><a href="+submenu1[2]+">"+submenu1[3]+"</a>"
+"						<li><a href="+submenu1[4]+">"+submenu1[5]+"</a>"
+"						<li><a href="+submenu1[6]+">"+submenu1[7]+"</a>"
+"						<li><a href="+submenu1[8]+">"+submenu1[9]+"</a>"
+"						<li class=plinks><a href="+submenu1[10]+">"+submenu1[11]+"</a>"
+"							<ul>"
+"								<li><a href='http://auto.ferrari.com/en_EN/'>פרארי</a>"
+"								<li><a href='https://he.wikipedia.org/wiki/פרארי'>ויקיפדיה</a>"
+"								<li><a href='https://www.youtube.com/c/ferrari'>יוטיוב</a>"
+"								<li><a href='http://car-configurator.ferrari.com/california-t#config/1|40400|12500000|c00020|6000000|4020|||8000000|2|e00|2c000|550|||||||||||10400|7f7fff4c|3'>עצב בעצמך!</a>"
+"							</ul>"
+"					</ul>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href="+submenu2[0]+"><img src="+submenu2[1]+"></a>"
+"					<ul>"
+"						<li style='display:none'><a href="+submenu2[0]+"><img src="+submenu2[1]+"></a>"
+"						<li><a href="+submenu2[2]+">"+submenu2[3]+"</a>"
+"						<li><a href="+submenu2[4]+">"+submenu2[5]+"</a>"
+"						<li><a href="+submenu2[6]+">"+submenu2[7]+"</a>"
+"						<li><a href="+submenu2[8]+">"+submenu2[9]+"</a>"
+"						<li class=plinks><a href="+submenu2[10]+">"+submenu2[11]+"</a>"
+"							<ul>"
+"								<li><a href='http://www.lego.com/en-us/'>לגו</a>"
+"								<li><a href='https://he.wikipedia.org/wiki/לגו'>ויקיפדיה</a>"
+"								<li><a href='https://www.youtube.com/user/LEGO'>יוטיוב</a>"
+"								<li><a href='https://education.lego.com/en-au?noredir=true'>השכלה</a>"
+"							</ul>"
+"					</ul>"
+"<!------------------------------------------------------------------------------>"
+"				<li><a href="+submenu3[0]+"><img src="+submenu3[1]+"></a>"
+"					<ul>"
+"						<li style='display:none'><a href="+submenu3[0]+"><img src="+submenu3[1]+"></a>"
+"						<li><a href="+submenu3[2]+">"+submenu3[3]+"</a>"
+"						<li><a href="+submenu3[4]+">"+submenu3[5]+"</a>"
+"						<li><a href="+submenu3[6]+">"+submenu3[7]+"</a>"
+"						<li><a href="+submenu3[8]+">"+submenu3[9]+"</a>"
+"						<li class=plinks><a href="+submenu3[10]+">"+submenu3[11]+"</a>"
+"							<ul>"
+"								<li><a href='http://www.intel.co.il/'>אינטל</a>"
+"								<li><a href='https://he.wikipedia.org/wiki/אינטל'>ויקיפדיה</a>"
+"								<li><a href='https://he.wikipedia.org/wiki/אינטל_ישראל'>ויקיפדיה ישראל</a>"
+"								<li><a href='https://www.youtube.com/user/channelintel'>יוטיוב</a>"
+"								<li><a href='https://www.youtube.com/results?search_query=silicon+valley+documentary'>צילומי תעודה</a>"
+"							</ul>"
+"					</ul>"
+"<!------------------------------------------------------------------------------>"
+"			</ul>";

var page = window.location.href;
	
function verify() {
	var tafrit = document.getElementById("menu");
	var elements = tafrit.getElementsByTagName("a");
	var upper_element = null;
	var first = true;
	
	for (i=elements.length-1; i>=0; --i) {
		if (elements[i].href[0]=="#") continue;
		if (page.indexOf(elements[i].href)>=0) {
			if (!first && i==0) break;
			elements[i].className="active";
			if (upper_element==null) {
				upper_element=elements[i].parentNode.parentNode;
			}
			first = false;
		}
	}
	
	if (upper_element.id==tafrit.id) {
		upper_element.parentNode.firstChild.className="active";
		document.getElementById("sidebar").style.display = "none";
		document.getElementById("content").style.width = "100%";
		return;
	}
	else {
		upper_element.parentNode.firstChild.className="active";
		document.getElementById("sidebar").innerHTML="<ul id=sidemenu>"+upper_element.innerHTML+"</ul>";
	}
}

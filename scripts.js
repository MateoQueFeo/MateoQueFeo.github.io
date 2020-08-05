var z=0

function showList(id1,id2)
{
	var x=document.getElementById(id1).style;
	var y=document.getElementById(id2);

	if (x.display=="block")
	{
		x.display="none";
		y.className="closed";
	}
	else
	{
		x.display="block";
		y.className="open";
	}
}

function showMenu()
{
var x=document;

if (x.getElementById("links").style.width=="0px")
	{
	x.getElementById("left").className="lefto";
	x.getElementById("links").style.width="180px";
	x.getElementById("main").style.left="180px";
	x.getElementById("main").style.width="calc(100% - 180px)";
	}
else
	{
	x.getElementById("left").className="leftc";
	x.getElementById("links").style.width="0px";
	x.getElementById("main").style.left="0px";
	x.getElementById("main").style.width="100%";
	}
}

function showRWY(id)
{
	var x=document;
	z=z+1;
	x.getElementById(id).style.zIndex=z;
	x.getElementById("iwwc").style.zIndex=z+1;
}

function showSat(id)
{
	var x=document;
	z=z+1;
	x.getElementById(id).style.zIndex=z;
}

function showMTGRM(id)
{
	var x=document;
	z=z+1;
	x.getElementById(id).style.zIndex=z;
}

function xsdate()
{
	var d = new Date();
	var y = d.getUTCFullYear();
	var m = ("0" + (d.getUTCMonth()+1)).slice(-2);
	var dd = ("0" + d.getUTCDate()).slice(-2);
	var dt = y + "-" + m + "-" + dd;
	document.getElementById('Date1').value = dt;
}

function xstime()
{
	var d = new Date();
	var h = d.getUTCHours() + 1;
	var tm = h + ":00";
	document.getElementById('Time1').value = tm;
}

function icao(a,b,c)
{
	document.getElementById('ICAO').value = a;
	document.getElementById('LAT').value = b;
	document.getElementById('LON').value = c;
}

function icaoS(a,b,c,d,e,f,g,h,i)
{
	document.getElementById('ICAO1').value = a;
	document.getElementById('ICAO2').value = b;
	document.getElementById('ICAO3').value = c;
	document.getElementById('ICAO4').value = d;
	document.getElementById('ICAO5').value = e;
	document.getElementById('ICAO6').value = f;
	document.getElementById('ICAO7').value = g;
	document.getElementById('ICAO8').value = h;
	document.getElementById('ICAO9').value = i;
}

function icaoP(a,b,c,d,e,f,g,h,i)
{
	document.getElementById('pICAO1').value = a;
	document.getElementById('pICAO2').value = b;
	document.getElementById('pICAO3').value = c;
	document.getElementById('pICAO4').value = d;
	document.getElementById('pICAO5').value = e;
	document.getElementById('pICAO6').value = f;
	document.getElementById('pICAO7').value = g;
	document.getElementById('pICAO8').value = h;
	document.getElementById('pICAO9').value = i;
}

function string(a,l)
{
	var x = document.getElementById(a);
	var txt="";
	var i=0;

	do
	{
		txt = txt + x.elements[i].value;
		i++;
	}
	while(x.elements[i].value.length > 0)

	document.getElementById(l).innerHTML="Click to Load";
	document.getElementById(l).href=txt;
}

function xsreset(r)
{
	document.getElementById(r).innerHTML="";
	document.getElementById(r).href="";
}

function AFWasfQuickyTAFS()
{
	x=document.textForm;
	x.ICAO.value="KLAS;KLSV;KBLH;KNYL;KEED;KIFP;KIGM;KPRC;KGCN;KFLG;KPAN;KINW;KGXF;KLUF;KPHX;KCGZ;KIWA;KMZJ;KAVQ;KRYN;KTUS;KDMA;KOLS;KALK;KFHU;KSAD;KDUG;KGUP;KABQ;KDMN;KELP;KHMN;KROW";
}

function AFWmifQuickyTAFS()
{
	x=document.textForm;
	x.ICAO.value="KNYL;KGXF;KLUF;KPHX;KCGZ;KIWA;KMZJ;KAVQ;KRYN;KTUS;KDMA;KOLS;KALK;KFHU;KSAD;KDUG;KDMN";
}

function AFWlclQuickyTAFS()
{
	x=document.textForm;
	x.ICAO.value="KMZJ;KAVQ;KRYN;KTUS;KDMA;KOLS;KALK;KFHU;KSAD";
}

function asfQuickyTAFS()
{
	x=document.textForm;
	x.station_ids.value="KLAS KLSV KBLH KNYL KEED KIFP KIGM KPRC KGCN KFLG KPAN KINW KGXF KLUF KPHX KCGZ KIWA KMZJ KAVQ KRYN KTUS KDMA KOLS KALK KFHU KSAD KDUG KGUP KABQ KDMN KELP KHMN KROW";
}

function mifQuickyTAFS()
{
	x=document.textForm;
	x.station_ids.value="KNYL KGXF KLUF KPHX KCGZ KIWA KMZJ KAVQ KRYN KTUS KDMA KOLS KALK KFHU KSAD KDUG KDMN";
}

function lclQuickyTAFS()
{
	x=document.textForm;
	x.station_ids.value="KMZJ KAVQ KRYN KTUS KDMA KOLS KALK KFHU KSAD";
}

function LTG()
{
	window.open("https://www.lightningmaps.org","LTG","menubar=0,status=0,titlebar=0,toolbar=0");
}

function WebCam()
{
	window.open("file:///G:/Links/Webcam.htm","WebCam","menubar=0,status=0,titlebar=0,toolbar=0");
}

function SkyVector()
{
	window.open("https://skyvector.com","SkyVector","height=999,width=720,menubar=0,status=0,titlebar=0,toolbar=0");
}
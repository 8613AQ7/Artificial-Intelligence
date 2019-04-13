function play(screeni)
{
	if(screeni==4)
	{
		var learn = document.getElementsByClassName('learn');
		for(var i = 0; i < learn.length;i++)
		{
			var h3 = learn[i].getElementsByTagName('h3')[0];
			var img = learn[i].getElementsByTagName('img')[0];
			h3.setAttribute('class','active');
			img.setAttribute('class','active');
		}
	}
}



window.onload=function()
{
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var page = document.getElementById('page1');
	var scroll = document.documentElement.scrollTop;
	var nav = document.getElementById('nav');
	var navi = nav.getElementsByTagName('a');
	var count = 0;
	for(var i = navi.length-1; i >= 0;i--)
	{
		navi[i].index=count;
		navi[i].onclick=function()
		{
			document.body.scrollTop = this.index*600;
			play(this.index+1);
		}
		count++;
	}
}
window.onscroll=function()
{
	var top = document.body.scrollTop;
	var header = document.getElementById('header');
	var ai = document.getElementById('ai');
	var nav = document.getElementById('nav');
	var navi = nav.getElementsByTagName('a');
	if(top > 0)
	{
		header.style.backgroundColor = '#44a';
		ai.style.color = '1fe';
		for(var i = 0; i<navi.length;i++)
		{
			navi[i].style.color = '1fe';
		}
		if(top>1600)
		{
			play(4);
		}
	}
	else
	{
		header.style.backgroundColor = '#cfc';
		ai.style.color = '#00e';
		for(var i = 0; i<navi.length;i++)
		{
			navi[i].style.color = '00e';
		}
	}
}


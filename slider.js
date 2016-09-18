
var timerSlider;

function alijkh_slider(_element)
{
	if(_element.length)
	{
		for (var i = 0; i < _element.length; i++) {
			alijkh_slider_set(_element[i]);
		}
	}
	else
	{
		alijkh_slider_set(_element);
	}

	// var slider   = document.getElementsByClassName("slider");
	// console.log(slider.length);


}
function alijkh_slider_set(_element)
{
	atSlider = setInterval(alijkh_slider_next.bind(_element), 1500);
	_element.setAttribute('data-num', 0);
	var ul_nav = document.createElement("div");
	ul_nav.className= 'base-btn';
	// console.log(_element);
	var prev_nav = document.createElement("span");
	prev_nav.addEventListener('click', function(){
		alijkh_slider_prev.call(this.parentElement.parentElement);
	});
	// prev_nav.className = 'btn';
	prev_nav.className= 'prev btn';
	ul_nav.appendChild(prev_nav);

	var prev_text = document.createTextNode("<");
	prev_text.className = 'btn';
	prev_text.className= 'prev';
	prev_nav.appendChild(prev_text);

	var next_nav = document.createElement("span");
	next_nav.addEventListener('click', function(){
		alijkh_slider_next.call(this.parentElement.parentElement);
	});
	next_nav.className = 'btn next';
	// next_nav.className= 'next';
	ul_nav.appendChild(next_nav);


	var next_text = document.createTextNode(">");
	next_text.className = 'btn';
	next_nav.appendChild(next_text);

	// console.log(_element);
		// _element.addEventListener('mouseover');
		// _element.addEventListener('mouseout');


	// var puse_nav = document.createElement("button");
	// puse_nav.className = 'btn';
	// puse_nav.class= 'puse';
	// ul_nav.appendChild(puse_nav);
	// puse_nav.addEventListener('click', alijkh_slider_puse);

	// var puse_text = document.createTextNode("");
	// puse_text.className = 'btn';
	// puse_nav.appendChild(puse_text);

	_element.appendChild(ul_nav);

}

function alijkh_slider_next()
{

	console.log(this);
	var slider = this;

	// var slider = _element.parentElement.parentElement;


	// var slider = this;

	var current_num = slider.getAttribute('data-num');
	var current_active = slider.getElementsByClassName('active')[0];
	// var get_li = current_active.getElementsByTagName("div")[0];
	// console.log(get_li);
	// console.log(current_num);
	current_active.className = '';

	var ul_images = slider.getElementsByTagName('ul')[0];

	if( parseInt(slider.getAttribute('data-num')) >=  parseInt(ul_images.getElementsByTagName('li').length)-1 )
	{
	var new_active_num = 0;
	}
	else
	{
	var new_active_num = ++current_num;
	}


	// var get_li = current_active.getElementsByTagName("div")[0];
	// console.log(get_li);
	// get_li.className += " load-step";

	var ul_images = slider.getElementsByTagName('ul')[0];
	var new_active_tag = ul_images.getElementsByTagName('li')[new_active_num];
	new_active_tag.className = 'active';

	// var loader = slider.getElementsByClassName("load")[0];
	// loader.className += " load-step";

	slider.setAttribute('data-num', new_active_num);
	return false;
}

function alijkh_slider_prev()
{

	 // console.log(this);
	var slider = this;
	// var slider = this;
	var current_num = slider.getAttribute('data-num');
	var ul_images = slider.getElementsByTagName('ul')[0];

	var current_active = slider.getElementsByClassName('active')[0];
	current_active.className = '';

	if(parseInt(slider.getAttribute('data-num')) == 0)
	{
		// console.log("fffffff");

	var new_active_num = parseInt(ul_images.getElementsByTagName('li').length)-1 ;
	}
	else
	{
	var new_active_num = --current_num;

	}

	var ul_images = slider.getElementsByTagName('ul')[0];
	var new_active_tag = ul_images.getElementsByTagName('li')[new_active_num];
	new_active_tag.className = 'active';


	slider.setAttribute('data-num', new_active_num);
	return false;
}

function mouse_in (_element)
{/*
	 clearInterval(atSlider);
	 console.log("mouse_in()");*/
	 // console.log(this.atSlider);
}

function mouse_out (_element)
{
	// _element.atSlider = setInterval(alijkh_slider_next.bind(this), 1500);
	 // setInterval(alijkh_slider_next(),1500);
	 // setInterval(this.atSlider.bind(_element), 1500);
	 // console.log("mouse_out()");
/*	 console.log(this);
	atSlider = setInterval(alijkh_slider_next.bind(this), 1500);*/
	 // clearInterval(this.atSlider);
}
alijkh_slider(document.getElementsByClassName('slider'));



// var time = setInterval(alijkh_slider(), 2000)

// function(){ time = setInterval(alijkh_slider, 1000) }




// function slider()
// {
// 	var loading = document.getElementsByClassName("load");
// 	var classes = loading[0];
// 	console.log(classes);
// 	classes.className += " load-step";
// 	var slider   = document.getElementById("slider");
// 	var images   = slider.getElementsByTagName("li");
// 	var active   = slider.getElementsByClassName("active")[0];
// 	var selected = parseInt(active.getAttribute('data-num'));
// 	var next     = selected +1;

// 	if(next > images.length)
// 	{
// 		next = 1;
// 	}

// 	for(var i = 0; i < images.length; i++)
// 	{
// 		var currentNum = images[i].getAttribute('data-num');

// 		if(currentNum == selected)
// 		{
// 			images[i].className = "";
// 		}
// 		else if(currentNum == next)
// 		{
// 			images[i].className = "active";

// 		}

// 	}

// }

// function prev(){
// 	var slider   = document.getElementById("slider");
// 	var images   = slider.getElementsByTagName("li");
// 	var active   = slider.getElementsByClassName("active")[0];
// 	var selected = parseInt(active.getAttribute('data-num'));
// 	var prev = selected -1;

// 	if (prev < 1)
// 	{
// 		prev = parseInt(images.length);
// 	}

// 	// var per =parseInt(selected-1);
// 	for(var i = 0; i < images.length; i++)
// 	{

// 		var currentNum = images[i].getAttribute('data-num');
// 		if(currentNum == selected)
// 		{
// 			images[i].className = "";
// 		}
// 		else if(currentNum == prev){
// 			images[i].className = "active";
// 		}
// }
// }

// function remove_class(_this , _class){

//   var classnames = _this.getAttribute('class');

//   var classnames_arr = classnames.split(" ");
//   var has = has_class(_this, _class);
//   if(has >= 0)
//   {
//     classnames_arr.splice(has, 1);
//   }
//     var x = classnames_arr.join(' ');
//     _this.setAttribute('class', classnames_arr.join(' '));
// }


// function has_class(_this , _class){
//   var has_spin = -1;
//   classnames_arr = get_class(_this);
//   for (var j = 0; j < classnames_arr.length; j++) {
//     if (classnames_arr[j] ==  _class)
//       {
//         has_spin = j;
//         break;
//       }
//   }
//   return has_spin;
// }

// 		for(var i = 0; i < images.length; i++)
// 	{
// 		var currentNum = images[i].getAttribute('data-num');

// 		if(currentNum == selected)
// 		{
// 			images[i].className = "";
// 		}
// 		else
// 		{
// 			if (i>5)
// 			 {
// 			 	i=0;
// 				images[i].className = "active";
// 				break;
// 			 }

// 		}
// 	}
// }


	// 	if(currentNum == next)
	// 	{
	// 		images[i].className = "active";
	// 	}
	// }
	// // if(_prev !== undefined)
	// {
	// 	var next = parseInt(selected) - 1;
	// 	if(next < 1)
	// 	{
	// 		next = images.length;
	// 	}
	// }
	// else
	// {
	// 	var next     = parseInt(selected) + 1;
	// 	if(next > images.length)
	// 	{
	// 		next = 1;
	// 	}
	// }

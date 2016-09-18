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
}
function alijkh_slider_set(_element)
{
	atSlider = setInterval(alijkh_slider_next.bind(_element), 1500);
	_element.setAttribute('data-num', 0);
	var ul_nav = document.createElement("div");
	ul_nav.className= 'base-btn';
	var prev_nav = document.createElement("span");
	prev_nav.addEventListener('click', function(){
		alijkh_slider_prev.call(this.parentElement.parentElement);
	});
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
	ul_nav.appendChild(next_nav);
	var next_text = document.createTextNode(">");
	next_text.className = 'btn';
	next_nav.appendChild(next_text);
	_element.appendChild(ul_nav);
}

function alijkh_slider_next()
{
	console.log(this);
	var slider = this;
	var current_num = slider.getAttribute('data-num');
	var current_active = slider.getElementsByClassName('active')[0];
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
	var ul_images = slider.getElementsByTagName('ul')[0];
	var new_active_tag = ul_images.getElementsByTagName('li')[new_active_num];
	new_active_tag.className = 'active';
	slider.setAttribute('data-num', new_active_num);
	return false;
}

function alijkh_slider_prev()
{
	var slider = this;
	var current_num = slider.getAttribute('data-num');
	var ul_images = slider.getElementsByTagName('ul')[0];
	var current_active = slider.getElementsByClassName('active')[0];
	current_active.className = '';
	if(parseInt(slider.getAttribute('data-num')) == 0)
	{
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
alijkh_slider(document.getElementsByClassName('slider'));



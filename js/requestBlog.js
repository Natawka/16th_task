
function GoogleCallback(jqueryObj, data){
	
	$('.style').remove();
	var html = $('#list').html();   
	var data = {
		results: [
		{
			url: 'url',
			title: 'app.route() - Express',
			visibleUrl: 'expressjs.com/ru/guide/routing.html',
			content: 'Для методов route, преобразуемых в недействительные имена переменных JavaScript, используйте нотацию в квадратных скобках.',
		},
		{
			url: 'url',
			title: 'Route Planner | Directions, traffic and maps | AA',
			visibleUrl: 'www.theaa.com › Travel',
			content: 'Use AA Route Planner to get directions. Find routes from a street, postcode, town, city or landmark to your destination. With maps, times, distance and miles.',
		},
		{
			url: 'url',
			title: 'ROUTE 148 весна 2015 open - Мотокалендарь',
			visibleUrl: 'motokalendar.com/route-148-vesna-2015-open',
			content: 'ROUTE 148 весна 2015 open. Дата: 25/04/2015 Организатор: MC Night Hunters Ukraine. Место проведения: Харьков, Украина',
		},
		{
			url: 'url',
			title: 'Route Genius | MapMyRun',
			visibleUrl: 'www.mapmyrun.com/maps/auto_route/',
			content: 'Route Genius. 0 mi ... Southwest, West, Northwest. Rotation. Random, Clockwise, Counter Clockwise. Avoid highways; Avoid ferries. Recommend a New Route',
		},
		{
			url: 'url',
			title: 'Route - WindowsFAQ.ru',
			visibleUrl: 'www.windowsfaq.ru › FAQ › Командная строка',
			content: 'Выводит на экран и изменяет записи в локальной таблице IP-маршрутизации. Запущенная без параметров, команда route выводит справку.',
		},
		{
			url: 'url',
			title: 'Network UPS Tools - Welcome',
			visibleUrl: 'networkupstools.org/',
			content: 'Support page of project to monitor all UPS types with enough interest. UPS drivers in package convert status data from native hardware format to common ',
		},
		{
			url: 'url',
			title: 'Urban Dictionary: Nut',
			visibleUrl: 'ru.urbandictionary.com/define.php?term=Nut',
			content: 'nut. (verb) to ejaculate. "If you do not stop sucking it I am gonna nut !" "We were just playing around with our clothes off when all of a sudden he rolled over on top',
		},
		{
			url: 'url',
			title: 'Nut (fruit) - Wikipedia, the free encyclopedia',
			visibleUrl: 'en.wikipedia.org/wiki/Nut_(fruit)',
			content: 'A nut is a fruit composed of a hard shell and a seed, which is generally edible. In a general context, however, a wide variety of dried seeds are called nuts',
		},
		]
	}
	var content = tmpl(html,data);
	
	$('body').append(content);  
	
}

$(function () {
	
	function Request(){
			var field = $(':text').val();
			$.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=" + field + "&callback=GoogleCallback&context=?",
		   
		    dataType: 'jsonp', //разрешает кросс-доменные запросы
		});
	};
	$(':text').bind('keypress', function(e){
		if (e.keyCode==13){
			 Request();
			 return false;
			}
	});
	
	$(':image').bind('click', function(){
		Request();
		return false;
	});
	
		
});
/* скрипт карты */
window.onload=function qw(name){
 x = 60.038191;
 y = 30.396485;
 maps(x,y);
}
function maps(a,b){
map = new ymaps.Map("map_block",{
	center:[a,b],
	zoom:16,
	controls:[]
});

let myPlacemark = new ymaps.Placemark([a, b],{
                balloonContentBody: 'Клуб книголюбов',
            },{
                    iconLayout: 'default#image',
                  //   Путь до нашей картинки
                    iconImageHref: 'images/logo.png', 
                    // Размер по ширине и высоте
                    iconImageSize: [60, 60],
                    // Смещение левого верхнего угла иконки относительно
                    // её «ножки» (точки привязки).
                    iconImageOffset: [-28, -60]
            });
	map.geoObjects.add(myPlacemark);
}
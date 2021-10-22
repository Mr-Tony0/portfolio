const burger = document.querySelector('.header__burger');
const title = document.querySelectorAll('.titleBlock');
const animateElements = [
	document.querySelector('.skills__progress_html'),
	document.querySelector('.skills__progress_css'),
	document.querySelector('.skills__progress_javascript'),
	document.querySelector('.skills__progress_jquery'),
	document.querySelector('.skills__progress_php'),
	document.querySelector('.skills__progress_photoshop'),
	document.querySelector('.header'),
];


//		***анимация при скроле***

window.addEventListener('scroll',function(){
	let heightPage = document.documentElement.clientHeight + 60;
	animateElements.forEach(item => {
		let positionY = item.getBoundingClientRect().top;
		if(positionY < heightPage){
			item.classList.add('active')
		}else{
			item.classList.remove('active')
		}
		if(pageYOffset!=0){
			$('.header').addClass('white');
		}else{
			$('.header').removeClass('white');
		}
	})
	title.forEach(item =>{
		let positionY = item.getBoundingClientRect().top;
		if(positionY<heightPage){
			item.classList.add('active')
		}else{
			item.classList.remove('active')
		}
	})
	/*let positionNumber = document.querySelector('.purpleNumber').getBoundingClientRect().top;
	if(//доделать){
		changeNumber('purpleNumber',125);
		changeNumber('yellowNumber',605);
		changeNumber('redNumber',800);
	}
	*/
})
if(pageYOffset!=0){
	$('.header').addClass('white');
}


//		***хедер в мобильной версии***


burger.addEventListener('click',function(){
	let header_all_active_class = [
		$('.header__burger'),
		$('.header__menu'),
	]
	header_all_active_class.forEach(addActiveClass =>{
		addActiveClass.toggleClass('active');
	})
})


//		***Анимация цифр***


function changeNumber(block,number){
	var numb_start = 0; // Получаем начальное число
	$({numberValue: numb_start}).animate({numberValue: number}, {
		duration: 3000, // Продолжительность анимации
		easing: "linear",
		step: function(val) {
			$('.'+block+'').html(Math.ceil(val)+'+');
		}
	});
};

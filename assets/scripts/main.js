'use strict';

document.addEventListener("DOMContentLoaded", function () {

	(function (){
		const dropdownToggler = document.querySelectorAll('.sidebar__list-item');
		const dropdownList = document.querySelectorAll('.sidebar__dropdown');

		function dropdownToggle (e) {
			e = this;
			dropdownToggler.classList.remove('sidebar__list-item_active');
			e.classList.add('sidebar__list-item_active');
			dropdownList.classList.remove('sidebar__dropdown_active');
			e.nextElementSibling.classList.add('sidebar__dropdown_active');
		}

		dropdownToggler.addEventListener('click', dropdownToggle());

	}());

});

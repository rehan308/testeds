import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Service/share.service';

import  { Navigation, Pagination,Swiper } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedCar: number;
  products: any;
  constructor(private api: ShareService) {}
  ngOnInit() {
    var swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.item');

    /* Toggle mobile menu */
    function toggleMenu() {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.querySelector('a').innerHTML = "<i class='fa fa-bars'></i>";
      } else {
        menu.classList.add('active');
        toggle.querySelector('a').innerHTML = "<i class='fa fa-times'></i>";
      }
    }

    /* Activate Submenu */
    function toggleItem() {
      if (this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
      } else if (menu.querySelector('.submenu-active')) {
        menu
          .querySelector('.submenu-active')
          .classList.remove('submenu-active');
        this.classList.add('submenu-active');
      } else {
        this.classList.add('submenu-active');
      }
    }

    /* Close Submenu From Anywhere */
    function closeSubmenu(e) {
      if (menu.querySelector('.submenu-active')) {
        let isClickInside = menu
          .querySelector('.submenu-active')
          .contains(e.target);

        if (!isClickInside && menu.querySelector('.submenu-active')) {
          menu
            .querySelector('.submenu-active')
            .classList.remove('submenu-active');
        }
      }
    }
    /* Event Listeners */
    toggle.addEventListener('click', toggleMenu, false);
    items.forEach((element) => {
      if (element.querySelector('.submenu')) {
        element.addEventListener('click', toggleItem, false);
      }
      element.addEventListener('keypress', toggleItem, false);
    });

    document.addEventListener('click', closeSubmenu, false);

    this.api.getAll().subscribe((res: any) => {
      console.log('res', res);
      this.products = res.products;
    });
  }
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
}

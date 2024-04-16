import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent {

  menuActive: boolean = false;
  subMenuActive: boolean = false;
  subMenuTitle: string = '';

  // submenu: HTMLElement;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  showSubMenu(): void {
    // subMenu = hasChildren.querySelector(".sub-menu");
    // subMenu.classList.add("active");
    // subMenu.style.animation = "slideLeft 0.5s ease forwards";
    // const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    // menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    // menu.querySelector(".mobile-menu-head").classList.add("active");

  }

  hideSubMenu(): void {
    this.subMenuActive = false;
    this.subMenuTitle = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 991) {
      if (this.menuActive) {
        this.toggleMenu();
      }
    }
  }

}

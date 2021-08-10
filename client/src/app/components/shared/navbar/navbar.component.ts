import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidebar') sidebar! :ElementRef;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Añade evento a la ventana general para cerrar el sidebar en caso de que se pulse fuera de él
    window.addEventListener('click', (e: any) => {
      if(this.isOpen) {
        if (document.getElementById('sidebar')!.contains(e.target)) {
        } else {
          this.sidebar.nativeElement.classList.remove('open-sidebar')
          this.isOpen = !this.isOpen;
        }
      }
    })
  }

 // mostrar sidebar en la vista

  toggleSidebar(): void {
    setTimeout(() => {
      if (!this.isOpen) {
        this.sidebar.nativeElement.classList.add('open-sidebar')
        this.isOpen = !this.isOpen;
      } else {
        this.sidebar.nativeElement.classList.remove('open-sidebar')
        this.isOpen = !this.isOpen;
      }
    }, 100);
  }

}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.html',
  styleUrls: ['./login-box.css']
})
export class LoginBoxComponent {
  translateX = 0;
  translateY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // Calcula un pequeño movimiento basado en la posición del mouse
    this.translateX = (e.clientX - window.innerWidth / 2) / 50;
    this.translateY = (e.clientY - window.innerHeight / 2) / 50;
    
  }
  
}

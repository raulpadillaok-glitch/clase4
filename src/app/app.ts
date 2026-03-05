import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background360 } from './components/background-360/background-360';
import { BackgroundText } from './components/background-text/background-text';
import { LoginBox } from './components/login-box/login-box';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Background360, BackgroundText, LoginBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clase4');
}

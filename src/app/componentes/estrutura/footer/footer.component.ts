import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  anoAtual: number;

  constructor() {
    this.anoAtual = new Date().getFullYear();
  }
}

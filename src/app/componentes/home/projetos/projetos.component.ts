import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  isChecked: boolean = true;

  // {
  //   titulo: '',
  //   img: '',
  //   texto: '',
  //   tech: '',
  //   preview: '',
  //   github: '',
  // },

  projetosApps = [
    {
      titulo: 'iQuiz',
      img: './img/projetos/iquiz.jpg',
      texto:
        'Esté é um mini quiz sobre Swift com UIKit, desenvolvido em Swift com StoryBoard, primeiro projeto para iOS',
      tech: 'Swift - StoryBoard',
      preview: '',
      github: 'https://github.com/Dithan/iQuiz',
    },
    {
      titulo: 'Cinetopia',
      img: './img/projetos/cinetopia.jpg',
      texto:
        'App fictício Cinetopia. Aqui você pode encontrar filmes, sinopses e também marca-los como favoritos para vizualizar posteriormente.',
      tech: 'Swift - UIKit',
      preview: '',
      github: 'https://github.com/Dithan/cinetopia',
    },
    {
      titulo: 'Chef Delivery',
      img: './img/projetos/chef-delivery.jpg',
      texto:
        'App fictício de delivery desenvolvido em Swift utilizando o framework SwiftUI.',
      tech: 'Swift - SwiftUI',
      preview: '',
      github: 'https://github.com/Dithan/chef-delivery',
    },
    {
      titulo: "Banco D'Ouro",
      img: './img/projetos/banco-douro.jpg',
      texto:
        "App de um banco fictício chamado Banco D'Ouro. Projeto desenvolvido durante o curso de Flutter da Alura. Neste projeto, criei telas, widgets, implementei navegação entre telas, validação de formulários, trabalhei com dados assíncronos e mais.",
      tech: 'Dart - Flutter',
      preview: '',
      github: 'https://github.com/Dithan/banco-douro',
    },
  ];

  projetosSites = [
    {
      titulo: 'teste',
      img: 'teste',
      texto: 'test',
      tech: 'teste',
      preview: 'teste',
      github: '',
    },
  ];
}

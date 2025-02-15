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
      titulo: "Banco D'Ouro",
      img: './img/projetos/projetos-apps/banco-douro.jpg',
      texto:
        "App de um banco fictício chamado Banco D'Ouro. Projeto desenvolvido durante o curso de Flutter da Alura. Neste projeto, criei telas, widgets, implementei navegação entre telas, validação de formulários, trabalhei com dados assíncronos e mais.",
      tech: 'Dart • Flutter',
      preview: '',
      github: 'https://github.com/Dithan/banco-douro',
    },
    {
      titulo: 'Chef Delivery',
      img: './img/projetos/projetos-apps/chef-delivery.jpg',
      texto:
        'App fictício de delivery desenvolvido em Swift utilizando o framework SwiftUI.',
      tech: 'Swift • SwiftUI',
      preview: '',
      github: 'https://github.com/Dithan/chef-delivery',
    },
    {
      titulo: 'Cinetopia',
      img: './img/projetos/projetos-apps/cinetopia.jpg',
      texto:
        'App fictício Cinetopia. Aqui você pode encontrar filmes, sinopses e também marca-los como favoritos para vizualizar posteriormente.',
      tech: 'Swift • UIKit',
      preview: '',
      github: 'https://github.com/Dithan/cinetopia',
    },
    {
      titulo: 'iQuiz',
      img: './img/projetos/projetos-apps/iquiz.jpg',
      texto:
        'Esté é um mini quiz sobre Swift com UIKit, desenvolvido em Swift com StoryBoard, primeiro projeto para iOS',
      tech: 'Swift • StoryBoard',
      preview: '',
      github: 'https://github.com/Dithan/iQuiz',
    },
  ];

  projetosSites = [
    {
      titulo: 'Vitcard',
      img: './img/projetos/projetos-sites/vitcard.jpg',
      texto:
        'Vitcard Multibenefícios é um site e empresa real que oferece consultas médicas e descontos para seus clientes. ',
      tech: 'HTML • SASS • JS • Php • MySQL • UI Design',
      preview: 'https://www.vitcardmultibeneficios.com.br/',
      github: '',
    },
    {
      titulo: 'Pignatti',
      img: './img/projetos/projetos-sites/pignatti.jpg',
      texto:
        'Pignatti é um site e empresa real que oferece assessoria completa em registro de marca, patente, direitos autorais e mais.',
      tech: 'HTML • SASS • JS • Php • MySQL • UI Design',
      preview: 'https://www.pignatti.com.br/',
      github: '',
    },
    {
      titulo: 'ONLi Group',
      img: './img/projetos/projetos-sites/onli-travel.jpg',
      texto:
        'ONLi Group  é uma empresa que atua em dois segmentos, uma Imobiliária e uma agência de viagens concierge, ambas especializadas no destino Orlando.',
      tech: 'HTML • SASS • JS • Php • MySQL • UI Design',
      preview: 'https://www.orlandonolimits.com/',
      github: '',
    },
    {
      titulo: 'MV Vasos e Plantas',
      img: './img/projetos/projetos-sites/mv-vasos-e-plantas.jpg',
      texto:
        'Site real de uma Loja de Jardinagem localizada no RJ. Criado com a finalidade de Landing page.',
      tech: 'HTML • CSS • JS • UI/UX Design',
      preview: 'https://dithan.github.io/mv-vasos-e-plantas/',
      github: 'https://github.com/Dithan/mv-vasos-e-plantas',
    },
    {
      titulo: 'Mata Mosquito',
      img: './img/projetos/projetos-sites/mata-mosquito.jpg',
      texto: "Jogo de navegador do curso de JavaScript do Jorge Sant'Ana",
      tech: 'HTML • CSS • JS',
      preview: 'https://dithan.github.io/Game-Mata-Mosquito/',
      github: 'https://github.com/Dithan/Game-Mata-Mosquito',
    },
    {
      titulo: 'Bickraft',
      img: './img/projetos/projetos-sites/bickraft.jpg',
      texto:
        'Site fictício de bicicletas elétricas, criado como projeto final do curso de HTML e CSS para Iniciantes - Origamid.',
      tech: 'HTML • CSS • JS',
      preview: 'https://dithan.github.io/bickraft/index.html',
      github: 'https://github.com/Dithan/bickraft',
    },
  ];
}

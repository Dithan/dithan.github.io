import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { img: './img/skills/flutter.png', titulo: 'Flutter' },
    { img: './img/skills/dart.png', titulo: 'Dart' },
    { img: './img/skills/swift.png', titulo: 'Swift' },
    { img: './img/skills/figma.png', titulo: 'Figma' },
    { img: './img/skills/angular.png', titulo: 'Angular' },
    { img: './img/skills/typescript.png', titulo: 'TypeScript' },
    { img: './img/skills/sass.png', titulo: 'SASS' },
    { img: './img/skills/react.png', titulo: 'React JS' },
    { img: './img/skills/javascript.png', titulo: 'JavaScript' },
    { img: './img/skills/php.png', titulo: 'Php' },
    { img: './img/skills/aws.png', titulo: 'AWS' },
    { img: './img/skills/git.png', titulo: 'Git' },
  ];
}

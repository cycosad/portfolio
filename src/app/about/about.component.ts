import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills = [
    {
      img: 'html',
      title: 'HTML 5',
      scale: 'Profound Knowledge',
      exp: moment().diff(moment('2015', 'YYYY'), 'years'),
    },
    {
      img: 'css',
      title: 'CSS 3',
      scale: 'Profound Knowledge',
      exp: moment().diff(moment('2015', 'YYYY'), 'years'),
    },
    {
      img: 'js',
      title: 'JavaScript',
      scale: 'Profound Knowledge',
      exp: moment().diff(moment('2015', 'YYYY'), 'years'),
    },
    {
      img: 'jquery',
      title: 'jQuery',
      scale: 'Profound Knowledge',
      exp: moment().diff(moment('2016', 'YYYY'), 'years'),
    },
    {
      img: 'boot',
      title: 'Bootstrap',
      scale: 'Profound Knowledge',
      exp: moment().diff(moment('2016', 'YYYY'), 'years'),
    },
    {
      img: 'ts',
      title: 'TypeScript',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'angular',
      title: 'Angular 2+',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'php',
      title: 'PHP',
      scale: 'Intermediate',
      exp: moment().diff(moment('2017', 'YYYY'), 'years'),
    },
    {
      img: 'ci',
      title: 'CodeIgniter',
      scale: 'Intermediate',
      exp: moment().diff(moment('2017', 'YYYY'), 'years'),
    },
    {
      img: 'mysql',
      title: 'MySQL',
      scale: 'Intermediate',
      exp: moment().diff(moment('2017', 'YYYY'), 'years'),
    },
    {
      img: 'wordpress',
      title: 'Wordpress',
      scale: 'Intermediate',
      exp: moment().diff(moment('2017', 'YYYY'), 'years'),
    },
    {
      img: 'ps',
      title: 'Photoshop',
      scale: 'Intermediate',
      exp: moment().diff(moment('2015', 'YYYY'), 'years'),
    },
    {
      img: 'sketch',
      title: 'Sketch',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'ai',
      title: 'Illustrator',
      scale: 'Beginner',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'xd',
      title: 'Adobe XD',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'sketch',
      title: 'Sketch',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'bulma',
      title: 'Bulma',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'git',
      title: 'GIT',
      scale: 'Intermediate',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'aws',
      title: 'AWS',
      scale: 'Beginner',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
    {
      img: 'unity',
      title: 'Unity',
      scale: 'Beginner',
      exp: moment().diff(moment('2018', 'YYYY'), 'years'),
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

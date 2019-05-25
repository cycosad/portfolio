import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ImageViewComponent} from '../image-view/image-view.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  websites = [
    {
      title: 'Saemushi Software Pvt. Ltd.',
      subTitle: 'A Digital Product Studio',
      img: 'saemushi.jpg',
      src: 'https://saemushi.com/',
    },
    {
      title: 'Proyoung Nutritional FZC',
      subTitle: 'Health & Nutrition Company',
      img: 'fzc.jpg',
      src: 'https://proyoung.ae/',
    },
    {
      title: 'Proyoung International',
      subTitle: 'MLM Software',
      img: 'proyoung.jpg',
      src: 'https://www.proyoung.co.in/',
    },
    {
      title: 'WDAUS',
      subTitle: 'Official Website',
      img: 'wdaus.jpg',
      src: 'http://wdaus.azurewebsites.net/',
    },
    {
      title: 'Tamsa Events',
      subTitle: 'Event Management',
      img: 'tamsa.jpg',
      src: 'http://www.tamsaims.com/',
    },
    {
      title: 'Schools Hub',
      subTitle: 'Students Management System',
      img: 'schoolshub_admin.jpg',
      src: 'https://schoolshub.azurewebsites.net/login/index.html',
    },
    {
      title: 'Govt. Polytechnic College',
      subTitle: 'Official Website',
      img: 'poly.jpg',
      src: 'http://govtpolyrepalle.co.in/',
    },
    {
      title: 'TRA ERF',
      subTitle: 'Education & Research Foundation',
      img: 'tra.jpg',
      src: 'http://www.tra-erf.org/',
    },
    {
      title: 'Blind Quiz',
      subTitle: 'Major Project',
      img: 'bquiz.jpg',
      src: 'https://blindquiz.000webhostapp.com/',
    },
    {
      title: 'Aspire - Club',
      subTitle: 'Club of GRIET',
      img: 'aspire.jpg',
      src: 'http://aspireclub.azurewebsites.net/',
    },
    {
      title: 'Pragnya - 2015',
      subTitle: 'Annual Technical Fest',
      img: 'pragnya.jpg',
      src: 'http://www.pragnya.griet.ac.in/',
    },
    {
      title: 'Fee Corner',
      subTitle: 'Mini Project #2',
      img: 'feecorner.jpg',
      src: 'https://feecorner.azurewebsites.net/',
    },
    {
      title: 'GRIET - MBA',
      subTitle: 'Offical Website - Wordpress',
      img: 'mba.jpg',
      src: 'http://www.mba.griet.ac.in/',
    },
    {
      title: 'GRIET - IEEE',
      subTitle: 'Offical Website - Wordpress',
      img: 'ieee.jpg',
      src: 'http://ieee.griet.ac.in/',
    },
    {
      title: 'GRIET - GEMZ',
      subTitle: 'Offical Website - Wordpress',
      img: 'gemz.jpg',
      src: 'http://gem.griet.ac.in/',
    },
  ];

  designs = [
    {
      src: 'dashboard_grid.png'
    },
    {
      src: 'cards-dashboard.jpg'
    },
    {
      src: 'toastr.png'
    },
    {
      src: 'griet.jpg',
    },
    {
      src: 'a-menu.jpg'
    },
    {
      src: 'account.png'
    },
    {
      src: 'badge.png'
    },
    {
      src: 'form-elements.png'
    },
    {
      src: 'organization_illustration.png'
    },
    {
      src: 'project_illustration.png'
    },
    {
      src: 'registration_flow.png'
    },
    {
      src: 'score-card.png'
    },
    {
      src: 'team.jpg'
    },
  ];

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
  }

  openDialog(src) {
    const dialogRef = this.dialog.open(ImageViewComponent, {
      width: '50vw',
      data: {
        src,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

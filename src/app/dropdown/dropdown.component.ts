import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bresc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  isCollapsed = false;
  slides;
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4, visibility: true};
  recept;

  ngOnInit() {

  }

  openDrowdoen() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
      this.slides = [
        {
          img: 'src/assets/images/DSC09789.jpg',
          recept: 'Marokkaanse pompoensoep',
          ingredienten:
          '<b>Ingrediënten:</b><br><br>\n' +
          '800 gram pompoenblokjes<br>\n' +
          '20 gram Bresc Ras el hanout<br>\n' +
          '10 gram verse gember<br>\n' +
          '500 ml groentebouillon<br>\n' +
          '200 ml kokosmelk<br>\n' +
          'olijfolie<br>\n' +
          'pita of naanbrood (optioneel)\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
          'Warm de oven voor op 200C, verdeel de pompoen over een bakplaat en rooster voor 15 minuten. Verwarm in een pan een scheutje olijfolie en voeg de ras el hanout en de gember toe en fruit voor 5 minuten. Voeg de bouillon, de pompoen en de kokosmelk toe en pureer tot een gladde massa met een blender of staafmixer. Serveer met pita of naanbrood\n'
        },
        {
          img: 'src/assets/images/DSC09789.jpg',
          recept: 'Valkosipulikeitto ',
          ingredienten:
          '<b>Ingrediënten:</b><br><br>\n' +
          '1 liter groentebouillon<br>\n' +
          '2 takjes verse tijm (of erbe italiano)<br>\n' +
          '20 gram geroosterde knoflook<br>\n' +
          '250 gram aardappel<br>\n' +
          '200 ml room<br>\n' +
          '50 gr oud brood<br>\n' +
          'olijfolie\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
          'Warm de oven voor op 200C, snijd het brood in blokjes en meng met wat olijfolie en de tijm, rooster voor 15 min of tot ze goudbruin zijn. Schil en snijd ondertussen de aardappel in blokjes en doe dit samen met de bouillon in een pan, voeg de knoflook toe en kook tot de aardappel gaar is. Voeg de room toe en pureer de soep glad met een blender. Breng op smaak met zout, peper en de croutons.\n'
        },
        {img: 'src/assets/images/DSC09789.jpg'},
        {img: 'src/assets/images/DSC09789.jpg'},
        {img: 'src/assets/images/DSC09789.jpg'}
      ];
      this.recept = this.slides[0];
    }
  }

  soepImageClick(recept) {
    this.recept = recept;
  }
}


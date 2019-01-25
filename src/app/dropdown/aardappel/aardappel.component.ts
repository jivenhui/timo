import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'bresc-aardappel',
  templateUrl: './aardappel.component.html',
  styleUrls: ['./aardappel.component.css']
})
export class AardappelComponent implements OnChanges {
  aardappelRecepten = [];
  recept
  @Input()
  isCollapsed
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 3, visibility: true};

  constructor() {
  }

  async ngOnChanges() {
    if (this.isCollapsed = true) {
      await this.delay(10);
      this.aardappelRecepten = [
        {
          img: '../../assets/images/recepten/aardappel/Aardappel-olijven.png',
          recept: 'Aardappel puree met zwarte olijven tapenade',
          ingredienten:
              '<b>Ingrediënten:</b><br><br>\n' +
              '500 gram bloemaardappels<br>\n' +
              'Zout<br>\n' +
              '25 gram boter<br>\n' +
              '100 ml room<br>\n' +
              '20 gram zwarte olijven tapenade<br>\n' +
              '5 gram knoflookpuree<br>\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
              'Schil en snijd en aardappel in blokjes, kook de aardappels in 20 min gaar. Stamp de aardappels fijn en vermeng met de boter en de room. Voeg de knoflook en de tapenade toe en breng op smaak met zout en peper.\n'
        },
        {
          img: '../../assets/images/recepten/aardappel/aardappels-med.png',
          recept: 'Mediterraanse geroosterde aardappels ',
          ingredienten:
              '<b>Ingrediënten:</b><br><br>\n' +
              '500 gram vastkokende aardappels, geschild en in stukken gesneden<br>\n' +
              '20 gram Bresc erbe italiano<br>\n' +
              '20 gram bloem<br>\n' +
              'zout en peper<br>\n' +
              'olijfolie<br>\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
              'Warm een oven voor op 200C. Breng water aan de kook en voeg zout toe, kook de aardappel voor 5 minuten. Giet af met een vergiet en strooi de bloem erover. Voeg de Bresc Erbe italiano toe en meng goed, doe de aardappels in een ovenschaal met de olijfolie. Bak voor 30 minuten in de oven en schud de aardappel op de helft een keer door. Serveer de aardappels met Bresc Bruschetta tomaat en basilicum mayonaise.\n'
        },
        {
          img: '../../assets/images/recepten/aardappel/Aardappelsalade-pesto.png',
          recept: 'Aardappelsalade met pesto',
          ingredienten:
              '<b>Ingrediënten:</b><br><br>\n' +
              '400 gr vastkokende aardappels<br>\n' +
              '100 gram augurken<br>\n' +
              '50 gram bosui<br>\n' +
              '20 gram pesto verde<br>\n' +
              '50 gram mayonaise<br>\n' +
              'zout en peper<br>\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
              'Zet een pan met water op vuur, voeg zout toe en breng aan de kook. Schil en snijd de aardappels in blokjes en blancheer deze tot ze beetgaar zijn. Giet af en spoel koud met water. Snijd de augurken en de bosui en voeg deze in een bekken samen met de aardappel. Voeg de pesto en mayonaise toe en breng op smaak met zout en peper. Meng goed en serveer. Voor een gezondere variant kies je in plaats van mayonaise voor crème fraiche.\n'
        },
        {
          img: '../../assets/images/recepten/aardappel/pomodori-marinati.png',
          recept: 'Mediterraanse stamppot met rucola en pomodori marinati ',
          ingredienten:
              '<b>Ingrediënten:</b><br><br>\n' +
              '500 gram bloemaardappels<br>\n' +
              'Zout<br>\n' +
              '25 gram boter<br>\n' +
              '100 ml room<br>\n' +
              '200 gram rucola<br>\n' +
              '50 gram pomodori marinati<br>\n',
          bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
              'Schil en snijd en aardappel in blokjes, kook de aardappels in 20 min gaar. Stamp de aardappels fijn en vermeng met de boter en de room. Voeg de rucola en de pomodori marinati toe, meng en breng op smaak met zout en peper.\n'
        }];
      this.recept = this.aardappelRecepten[0];
    }
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  imageClick(recept) {
    this.recept = recept;
  }
}

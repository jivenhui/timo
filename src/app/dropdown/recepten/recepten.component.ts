import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'bresc-recepten',
    templateUrl: './recepten.component.html',
    styleUrls: ['./recepten.component.css']
})
export class ReceptenComponent implements OnChanges {
    soepRecepten = [];
    recept;
    @Input()
    isCollapsed;
    slideConfig = {'slidesToShow': 4, 'slidesToScroll': 3, visibility: true};

    constructor() {
    }

    async ngOnChanges() {
        if (this.isCollapsed = true) {
            await this.delay(500);
            this.soepRecepten = [
                {
                    img: '../../assets/images/recepten/soepen/marokkaanse-tomaten-soep.jpg',
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
                    img: '../../assets/images/recepten/soepen/finse-knoflooksoep.png',
                    recept: 'Finse knoflooksoep ',
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
                {
                    img: '../../assets/images/recepten/soepen/thaise-curry-soep.png',
                    recept: 'Thaise curry soep',
                    ingredienten:
                        '<b>Ingrediënten:</b><br><br>\n' +
                        '5 gram knoflookpuree<br>\n' +
                        '5 gram gemberpuree<br>\n' +
                        '5 gram citroengras puree<br>\n' +
                        '10 gram Bresc Tikka masala<br>\n' +
                        '1 liter groentenbouillon<br>\n' +
                        '200 gram rijstnoedels<br>\n' +
                        '100 gram taugé<br>\n' +
                        '1 limoen\n',
                    bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
                        'Fruit de knoflook, gember, citroengras en Tikka masala in een pan voor 5 minuten op laag vuur, voeg de bouillon en kokosmelk toe en pureer met een blender, kook apart de noedels volgens de gebruiksaanwijzing. Serveer de soep met de noedels, de taugé en een kwart limoen.\n'
                },
                {
                    img: '../../assets/images/recepten/soepen/med-tomaten-soep.png',
                    recept: 'Geroosterde Italiaanse tomatensoep ',
                    ingredienten:
                        '<b>Ingrediënten:</b><br><br>\n' +
                        '500 gram (cherry)tomaat<br>\n' +
                        '1 el olijfolie<br>\n' +
                        '1 el balsamicoazijn<br>\n' +
                        'zout en peper<br>\n' +
                        '250 ml groentebouillon<br>\n' +
                        '200 gram pomodori marinati<br>\n' +
                        'platbrood\n',
                    bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
                        'Verwarm de oven op 225C, verdeel de tomaten over een bakplaat en bestrooi met de olijfolie, balsamico, zout en peper. Rooster 10 minuten in de hete oven, zet hierna de oven uit en laat voor nog 10 minuten nagaren. Doe de bouillon samen met de tomaat in de blender en blend tot een gladde massa. Breng op smaak met zout en peper. Garneer en serveer met de pomodori marinati en het platbrood.\n'
                }];
            this.recept = this.soepRecepten[0];
        }
    }

    soepImageClick(recept) {
        this.recept = recept;
    }

    async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

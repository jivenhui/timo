import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'bresc-recepten3',
    templateUrl: './recepten3.component.html',
    styleUrls: ['./recepten3.component.css']
})
export class Recepten3Component implements OnChanges {
    vegaGerechten = [];
    recept = {ingredienten: '', bereidingswijze: ''};
    @Input()
    isCollapsed

    slideConfig = {'slidesToShow': 3, 'slidesToScroll': 3, visibility: true};

    constructor() {
    }

    async ngOnChanges() {
        if (this.isCollapsed = true) {
            await this.delay(10);
            this.vegaGerechten = [
                {
                    img: '../../assets/images/recepten/vega/Bloemkool-nuggets.png',
                    recept: 'Bloemkool nuggets met tika masala mayo',
                    ingredienten:
                        '<b>Ingrediënten:</b><br><br>\n' +
                        '500 gram bloemkoolroosjes<br>\n' +
                        '50 gram mayonnaise<br>\n' +
                        '30 gram bloem<br>\n' +
                        '1 el nutritional yeast<br>\n' +
                        '1 tl uien poeder<br>\n' +
                        '1 tl Bresc knoflookpuree<br>\n' +
                        '1 tl Bresc erbe italiano<br>\n' +
                        'zout en peper\n',
                    bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
                        'Verwarm de oven op 200C. Meng de mayonaise met de erbe italiano en de knoflook puree en zet apart. Meng de rest van de ingrediënten in een kom en paneer de bloemkoolroosjes met dit mengsel. Spreid uit over een bakplaat met bakpapier en bak voor 30 minuten, draai ondertussen om. Serveer met de tika masala mayonaise (hyperlinked aan het mayo recept).\n'
                },
                {
                    img: '../../assets/images/recepten/vega/herfstrisotto.png',
                    recept: 'Herfstrisotto met paddenstoelen',
                    ingredienten:
                        '<b>Ingrediënten:</b><br><br>\n' +
                        '75 gram Bresc paddenstoelenmix<br>\n' +
                        '200 gram paddenstoelen<br>\n' +
                        '10 gram Bresc knoflookpuree<br>\n' +
                        '25 gram  Bresc sjalot<br>\n' +
                        '300 gram risotto rijst<br>\n' +
                        '175 ml witte wijn<br>\n' +
                        '25 gram bote<br>\n' +
                        '50 gram geraspte Parmezaanse kaas<br>\n' +
                        '1 liter groentebouillon<br>\n' +
                        'olijfolie<br>\n' +
                        'peper en zout\n',
                    bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
                        'Pak een brede pan, voeg een beetje olijfolie toe en fruit hierin de knoflook en de sjalot. Voeg de rijst toe en fruit door tot de rijstkorrel transparant wordt, blus af met de wijn. Voeg de paddenstoelenmix en de gesneden paddenstoelen toe en meng even door.  Voeg nu de bouillon stapsgewijs toe, 1 kop per keer en laat absorberen door de rijst, doe dit totdat de bouillon op is. Voeg dan de Parmezaanse kaas en de boter toe, roer door en laat 10 minuten met de deksel erop rusten. Serveer de risotto in een mooie kom en garneer met Parmezaanse kaas.\n'
                },
                {
                    img: '../../assets/images/recepten/vega/Japanse-noodles.png',
                    recept: 'Japanse hot noodles met gepekelde komkomme',
                    ingredienten:
                        '<b>Ingrediënten:</b><br><br>\n' +
                        '500 gram Udon noodles<br>\n' +
                        '20 gram Bresc WOKlook<br>\n' +
                        '100 gram bosui<br>\n' +
                        '100 ml groentebouillon<br>\n' +
                        '2.5 gram maïzena<br>\n' +
                        '75 ml lichte sojasaus<br>\n' +
                        '10 ml ketchup<br>\n' +
                        '10 ml sriracha<br>\n' +
                        '5 gram suiker<br>\n' +
                        '100 gram pinda’s<br>\n' +
                        '1 komkommer<br>\n' +
                        '110 ml sushi azijn\n',
                    bereidingswijze: '<b>Bereidingswijze:</b><br><br>\n' +
                        'Snij de komkommer in dunne plakken en meng in een kom met 100 ml van de sushiazijn, laat dit minsten 20 min staan. Kook de noodles volgens gebruiksaanwijzing giet goed af en bewaar tot nodig. Pak een wokpan en voeg de olie toe, op middelhoog vuur bak de WOKlook en de helft van de bosui. Voeg de bouillon, sojasaus, ketchup, 10 ml sushiazijn, sriracha, suiker en maizena toe en meng. Kook dit mengsel tot een goede sausdikte. Voeg de noodles toe en verhit voor nog een minuut. Garneer met de gepekelde komkommer en de pinda’s.\n'
                }
            ];
            this.recept = this.vegaGerechten[0];
            window.dispatchEvent(new Event('resize'));
        }
    }

    imageClick(recept1) {
        this.recept = recept1;
    }

    async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}

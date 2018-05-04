import { sayHello } from "./greet";
import * as noUiSlider from "nouislider"
//import * as wNumb from "wnumb"

let resultElement: HTMLElement = document.getElementById('result');
let sliders = document.getElementsByClassName('sliders');
let colors = [0,0,0];
//resultElement.style.background = 'rgb(0.5, 0.5, 0.5)';
//resultElement.style.color = 'rgb(0.5, 0.5, 0.5)';

[].slice.call(sliders).forEach(function( slider: noUiSlider.Instance, index: number ){

    noUiSlider.create(slider, {
        start: 127,
        connect: [true, false],
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 255
        },
        //format: wNumb.wNumb({
        //    decimals: 0
        //})
    });

    slider.style.height = '220px'
    slider.style.width = '20px'

    // Bind the color changing function to the update event.
    slider.noUiSlider.on('update', function ( ) {
        console.log('updating!')

        colors[index] = parseInt(slider.noUiSlider.get() as string, 10)

        let color: string = 'rgb(' + colors.join(',') + ')';
        console.log(color)
        console.log(resultElement)


        resultElement.style.background = 'rgb(127.12, 0, 0)'
        resultElement.style.background = color;
        resultElement.style.color = color;
        //resultElement.style.background = 'rgb(0, 0, 126)'
        //
    });
});


//And a trivial one that does nothing
let range = document.getElementById('newslider');

noUiSlider.create(range, {
    start: 127,
    connect: [true, false],
    orientation: "horizontal",
    range: {
        'min': 0,
        'max': 255
    },
});

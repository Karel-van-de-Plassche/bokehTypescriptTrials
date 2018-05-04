import $ from "jquery";
import "ion-rangeslider"

declare global {
    interface JQuery {
        disable(): JQuery;
    }
}

$.fn.extend({
    disable: function () {
        return this.each(function () {
            this.disabled = true;
        });
    }
});
let resultElement: HTMLElement = document.getElementById('result');

//And a trivial one that does nothing
let range = document.getElementById('example_id');
range.style.color = 'rgb(127, 127, 127)'
range.style.height = '100px'
range.style.width= '100px'
range.style.display = 'inline'
console.log($)
console.log($('#example_id'))
//$('#example_id').reset()
$('#example_id').ionRangeSlider({
    disable: false

});

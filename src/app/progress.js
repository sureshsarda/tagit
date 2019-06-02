
const progressbar = require('progressbar');

var bar = new progressbar.Progressbar.Line('#bar', { easing: 'easeInOut' });
// bar.animate(1);  // Value from 0.0 to 1.

export const bar;

export function animate(val) {
    bar.animate(val);
}
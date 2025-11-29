// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const calcTempAmplitudeNew = function (t1, t2) {
//     let temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);



const measureKelvin = function() {
    const measurement = {
        type: `temp`,
        unit: `celsius`,
        value: Number(prompt(`degrees celsius`))
    }
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());
"use strict"

const cities = ['Москва', 'Санкт-Петербург', 'Нижний новгород', 'Казань', 'Сочи'];
let citiesTemperature = [];


for(let i = 0; i < cities.length; i++){
    let temperature = prompt(`Введите температуру в городе ${i}`);
    citiesTemperature.push(temperature);
}

let min = Math.min(...citiesTemperature);
let max = Math.max(...citiesTemperature);

const moscow = document.getElementById('moscow');
const stPetersburg = document.getElementById('stPetersburg');
const nizhnyNovgorod = document.getElementById('nizhnyNovgorod');
const kazan = document.getElementById('kazan');
const sochi = document.getElementById('sochi');

const minT = document.getElementById('minT');
const maxT = document.getElementById('maxT');


moscow.textContent = citiesTemperature[0];
stPetersburg.textContent = citiesTemperature[1];
nizhnyNovgorod.textContent = citiesTemperature[2];
kazan.textContent = citiesTemperature[3];
sochi.textContent = citiesTemperature[4];

minT.textContent = min;
maxT.textContent = max;


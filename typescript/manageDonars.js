"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showDonar(donar) {
    console.log(donar.bloodGroup);
    console.log(donar.name);
}
var donar = { id: 101, name: 'ram', bloodGroup: 'bpos', mobileNumber: 484848 };
showDonar(donar);

import {BloodDonar} from './bloodDonar';

function showDonar(donar:BloodDonar):void{

    console.log(donar.bloodGroup);
    console.log(donar.name);
}

const donar:BloodDonar = {id:101,name:'ram',bloodGroup:'bpos',mobileNumber:484848};

showDonar(donar);
import {CityType} from "./02.02";

let city: CityType;

beforeEach(()=>{
    city={
        title:'NewYork',
        houses:[],
        govermentBuildings:[],
        citizenNumbers:10000
    }
})

//01.Саздайте тип CityType;
//02.Заполните обьект City ,чтобы тесты ниже прошли
test('test city should be contain 3 houses',()=>{expect
(city.houses.length).toBe(3)})


//01.Дополните  тип govermentBuildings;
//02.Заполните обьект City ,чтобы тесты ниже прошли
test.skip('test should contains hospital and fire station', ()=>{expect
(city.houses.length).toBe(3)})
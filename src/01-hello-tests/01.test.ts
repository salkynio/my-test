import {sum} from "./01";
import {multi} from "./01"


const a = 1;
const b = 2;
const c = 3;
test('sum should be correct', ()=>{
    //data

    //action
    const result = sum(a,b);

    //expect result

    expect(result).toBe(3);
})

test ('multiplier should be correct ', () =>{
    const result = multi(a,b);
    expect (result).toBe(2);
})

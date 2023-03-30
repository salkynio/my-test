 //TS требует типизации -защищает от ошибок при создании сложныз обьектов
 type cityType={
    city:string
     country:string
 }
 type adressType={
    streetTitle:string
     city:cityType
 }

 type techType={
     id: number
     title: string
 }
 type studentType={
    name:string
    age:number
     isActive:boolean
     adress: adressType

     technologies:Array<techType >

 }


export const student:studentType ={
     name: "Sasha",
     age: 25,
     isActive: true,
     adress: {
        streetTitle: 'Tokombaeva 23',
         city:{
            city:'Bishkek',
             country:'Kyrgyzstan'
         },

     },
    technologies:[
         {id:1,
         title:'HTML'} ,
         {id:2,
         title:'CSS'},
         {id:3,
         title:'React'}
     ]

}



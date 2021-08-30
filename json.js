// javascript object notation =JSON
// phn is a kind of string 
const shop={ 
    name:'Manik ',
    id:34,
    address:'Bagrpara',
    phn:'01984875045'
};
const manistringefied=JSON.stringify(shop);
console.log(manistringefied);
// stringify mane sb word ke string e turn kre 
// abar normal object e turn krte parse use kra hoi 
// search jsonplaceholder 
const convertd=JSON.parse(manistringefied);
console.log(convertd);
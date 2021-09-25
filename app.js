






// var date= new Date();
// date.setDate(24);
// // console.log(date.getDay())
// // date.setMonth()

// const monthsDays= document.querySelector('days')

// const lastDay = new Date(date.getFullYear(),
// date.getMonth()+1,0).getDate()
// const prevLastDay=new Date(date.getFullYear(),
// date.getMonth(),0).getDate()
// const firstDayIndex=date.getDay()

// const lastDayIndex=new Date(date.getFullYear(),
// date.getMonth()+1,0).getDay()


// const nextDays =7 - lastDayIndex-1
// const month = [
// "january",
// "Feburary",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December"

// ];
// document.querySelector(".date h1").innerHTML=month[date.getMonth()]

// document.querySelector(".date p").innerHTML=date.toDateString();

// let days = ""


// for(x=firstDayIndex; x>0; x--){
//     days+="<div class='prev-date'>${prevLastDay x+1}</div>"
// }

// for(i=0; i<=lastDay; i++){
//     if(i===new Date().getDate && date.getMonth()===new Date().getMonth()){
//      days += "<div class='today'>${i}</div>";

//  }
//  else{
//     days += "<div >${i}</div>";
     
//  }
// }







// for (let j = 1; j <=nextDays; j++) {
// days +='<div class="next-date">${j}</div>'    
// monthsDays.innerHTML=days;

// }







const date = new Date();
const renderCalendar =()=>{

    
date.setDate(1)
console.log(date.getDay());


const monthDays =document.querySelector('.days')

const lastDay=new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();
// console.log(lastDay)

const prevLastDay=new Date(date.getFullYear(),
date.getMonth(),0).getDate();
const firstDayIndex=date.getDay()

const lastDayIndex=new Date(date.getFullYear(),
date.getMonth()+1,0).getDay();

const nextDays=7-lastDayIndex-1;
// console.log(lastDayIndex)


const months = [
    "january",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    
    ];

document.querySelector(".date h1").innerHTML=months[date.getMonth()]

document.querySelector(".date p").innerHTML=new Date().toDateString();

let days="";

for (let x = firstDayIndex; x >0; x--) {
    // days +='<div class="prev-date">$
    // {prevLastDay - x}</div>';
    days +="<div class='prev-date'>"+prevLastDay +"</div>"
}

for(let i=1; i<=lastDay; i++){
    if(1===new Date().getDate() && date.getMonth() ===new Date().getMonth()){
        
        days +='<div id="today">'+i+'</div>';
    }
    else{

        days +='<div class="">'+i+'</div>';
    }
    
}

for(let j=1; j<=nextDays; j++){
    // days+='<div class="next-days">${j}</div>'
    days +="<div class='next-date'>"+j+"</div>"
    monthDays.innerHTML=days

}
}


// document.querySelector(''.prev').addEventListener('click',=>{

// })
document.querySelector('.prev').addEventListener('click',()=>
{
    date.setMonth(date.getMonth()+1)
renderCalendar()

});
document.querySelector('.next').addEventListener('click',()=>
{
    date.setMonth(date.getMonth()+1)
renderCalendar()

});
renderCalendar()
























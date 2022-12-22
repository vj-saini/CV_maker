
// // const fun=()=>{
// //     let mainOb = document.getElementById("main");
// //     mainOb.style.color="red";
// //     console.log(mainOb);
// //     document.body.style.backgroundColor="black";
// //     document.body.style.color="white";    
// // }

// // const getAtt=()=>{
// //     let x = document.getElementById("url");
// //     console.log(x);
// //     // let y = x.getAttribute("href");
// //     // console.log(y);
// //     // console.log(x.getAttribute("id"));
// // }
// // const setAtt=()=>{
// //     let x = document.getElementById("url");
// //     let y = x.setAttribute("href","https://www.yahoo.com");
// //     console.log(y);
// //     //console.log(x.getAttribute("id"));
// // }

// // const onBlub=()=>{
// //     let x = document.getElementById("Bulb");
// //     x.setAttribute("src","onbulb.jpeg")
// // }
// // const offBlub=()=>{
// //     let x = document.getElementById("Bulb");
// //     x.setAttribute("src","offbulb.jpeg")
// // }
// // const onOffBlub=()=>{
// //     let x = document.getElementById("Bulb");
// //     let y = x.getAttribute("src")
// //     console.log(y);
// //     if(y=="onbulb.jpeg"){
// //         offBlub();
// //     }else{
// //         onBlub();
// //     }
// // }
// // 

// const getTime=()=>{
//     let d = new Date();
//     let h = d.getHours();
//     let amPm = h>=12?"PM":"AM";
//     h=h%12;
//     h= (h==0) ? 12:h;
//     let m = d.getMinutes();
//     let s = d.getHours();
//     let ss = d.getMilliseconds();

//     return`${h}:${m}:${m}:${ss}`; 
// }
// // getTime();
// //console.log(getTime());
// setInterval (()=>{
//   let ob=document.querySelector('.clock');
//   ob.innerHTML = getTime();
// },1000);

const addNewWorkField = ()=>{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter hear");


    let weOb = document.getElementById("we");
    let weAddButoonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButoonOb);

}



const addNewAcau = ()=>{
    console.log('first');
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter hear");

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode,eqAddButtonOb);
}

//generating CV
const generateCV=()=>{
   //for name-field

   let nameField = document.getElementById("nameField").value;
   let nameT1 = document.getElementById('nameT1').innerHTML = nameField;;
   let nameT2 = document.getElementById('nameT2').innerHTML=nameField;

   //for contact-field shortcut way
   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
   
   //for address-field
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

   //Links
   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   document.getElementById("linkedT").innerHTML = document.getElementById("linkdinField").value;
   
   //objective
   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

   //work_experience
   let wes = document.getElementsByClassName("weField");
   let str =" ";
   for(let e of wes){
    str = str+`<li> ${e.value} </li>`
   }
   document.getElementById("weT").innerHTML = str;
   
   //accdemic_Qulification
   let aqs = document.getElementsByClassName("aqField");
   let str1 = " ";
   for(let f of aqs){
    str1 =str1+ `<li> ${f.value} </li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   //code for setting image
   let file = document.getElementById("imgField").files[0];
   console.log(file);
   let reader = new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   //set_imgae
   reader.onloadend = function(){
   document.getElementById("imgTemp").src=reader.result;
   }

   document.getElementById("cv-form").style.display='none';
   document.getElementById("cv-template").style.display='block';
}

const printCV=()=>{
    window.print();
}
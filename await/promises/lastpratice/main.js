let url="https://fakestoreapi.com/products"

async function getdata(){
    let cardcontainer=document.getElementById("cardcontainer")
    let data=await fetch(url)
    let prod=await data.json()
    for(i=0;i<prod.length;i++){
        let card=document.createElement("div")
        card.innerHTML=`<img src='${prod[i].image}'>`
        cardcontainer.append(card)

    }
}
let cardcontainer=document.getElementById("cardcontainer")
async function getdata(){
    cardcontainer.innerHTML=""
    let data=await fetch(url)
    let prod=await data.json()
    prod.forEach((x)=>{
        let card=document.createElement("div")
        card.innerHTML=`<img src='${x.image}'>`
        cardcontainer.append(card)

    })
}

async function getmens() {
    cardcontainer.innerHTML=""
    let data=await fetch(url)
    let prod=await data.json()
    prod.forEach((x)=>{
        if(x.category==="men's clothing"){
            let card=document.createElement("div")
            card.innerHTML=`<img src='${x.image}'>`
            cardcontainer.append(card)
        }
    })
}

async function getwomens() {
    cardcontainer.innerHTML=""
    let data=await fetch(url)
    let prod=await data.json()
    prod.forEach(x=>{
        if(x.category==="women's clothing"){
            let card=document.createElement("div")
            card.innerHTML=`<img src='${x.image}'>`
            cardcontainer.append(card)
        }
    })
}


if(true){
    setTimeout(()=>{console.log("succesfully")},2000)
}else{
    setTimeout(()=>{console.log("failed")},2000)   
}

if(true){
    setInterval(()=>{console.log("succesfully")},2000)
}else{
    setInterval(()=>{console.log("failed")},2000)   
}

function getname(){
 let   name="Ajith"
 function getdata(){
    console.log(name)
 }
 getdata()
}
getname()

function getname(){
    let   name="Ajith"
    function getdata(){
      setTimeout(()=>{console.log(name)},2000)
    }
    getdata()
   }
   getname()


function getprint(){
     console.log(window.print("hello"))
}

function getopen(){
    window.open("https://ecs.ibomma.day/telugu-movies/","_blank","width=400, height=300, top=230, left=540")
}
function getclose(){
    window.close()
}
function scrollWin(x,y){
    window.scrollBy(x,y)
}


console.log(`screen.width: ${screen.width}`)
console.log(`screen.height: ${screen.height}`)
console.log(`screen.availWidth: ${screen.availWidth}`)
console.log(`screen.availHeight : ${screen.availHeight}`)
console.log(`screen.colorDepth: ${screen.colorDepth}`)
console.log(`screen.pixelDepth : ${ screen.pixelDepths}`)

async function a() {
    let ticketbook=await new Promise((resolve,reject)=>{
    if(1){
        setTimeout(()=>{
            alert("ticket booked")
        },1000)
    }
    })
}
a()

async function a() {
    let ticket=await new Promise(()=>{
        if(false){
            setTimeout(()=>{
                alert("booked successfully")
            })
        }else{
            setTimeout(()=>{
                alert("Not successful book again")
            },2000)
        }
    },1000)
    
}
// a()

const a=new Promise(()=>{
    if(1){
        function a(){
            console.log(100+90)
            alert(100+80)
        }
        a()
    }else{
        alert("not invoked")
    }
})

const a=new Promise(()=>{
    if(1){
        function b(){
          alert(100+20)
        }b()
    }else{
        alert("reject")
    }
})
 a.then(x=>console.log(x)).catch(y=>console.log(y))

const a=90
const b=true
const data=new Promise((resolve,reject)=>{
    if(a&&b){
   setTimeout(()=>{
    resolve("Successfully")
   })
    }else{
        setTimeout(()=>{
            reject("invalid")
        })
    }
})
data.then(x=>console.log(x)).catch(y=>console.log(y))

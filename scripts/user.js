let q1=document.getElementById("box");
const show=async()=>{

    let r=await fetch("http://localhost:3000/abcd")
    let y=await r.json();
    q1.innerHTML="";
    y.map(e=>{
        let w1=document.createElement("div")
        w1.style.border="1px solid black"
        let w2=document.createElement("img")
        w2.src=e.image_url;
        let w3=document.createElement("p")
        w3.innerText=e.book_name;
        let w4=document.createElement("p")
        w4.innerText=e.author;
        let w5=document.createElement("p")
        w5.innerText=e.genre;
        let w6=document.createElement("p")
        w6.innerText=e.edition;
        let w7=document.createElement("p")
        w7.innerText=e.publisher;
        let w8=document.createElement("p")
        w8.innerText=e.cost;
        let w9=document.createElement("button")
        w9.innerText="BORROW";
        w9.style.backgroundColor="green"
        w9.style.color="white"
        w1.append(w2,w3,w4,w5,w6,w7,w8,w9);
        q1.append(w1)
    })
}

show();
let a=document.querySelector("form");

const myFn=async()=>{
    event.preventDefault();
    let obj={	
        "image_url":a.img.value,
        "book_name":a.name.value,
        "author":a.author.value,
        "genre":a.Genre.value,
        "edition":a.year.value,
        "publisher":a.Publisher.value,
        "cost":a.Cost.value,
        "borrowed": false,
    }
    // console.log(a.img.value,a.name.value);
    try
   { let r=await fetch("http://localhost:3000/abcd",{method:"POST",body:JSON.stringify(obj),headers:{"Content-type":"application/json"}})
    let res=await r.json();
    }
    catch(err){
        console.log("Error");
    }
    show();
}

a.addEventListener("submit",myFn)


// ////////////////////



const show=async()=>{

    let r=await fetch("http://localhost:3000/abcd")
    let y=await r.json();
    
    var tbody=document.querySelector("tbody");
    tbody.innerHTML="";
    y.map(e=>{
        let trow=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=e.image_url;
        let td2=document.createElement("td")
        td2.innerText=e.book_name;
        let td3=document.createElement("td")
        td3.innerText=e.author;
        let td4=document.createElement("td")
        td4.innerText=e.genre;
        let td5=document.createElement("td")
        td5.innerText=e.edition;
        let td6=document.createElement("td")
        td6.innerText=e.publisher;
        let td7=document.createElement("td")
        td7.innerText=e.cost;
        let td17=document.createElement("td")
        td17.innerText=e.borrowed;
        let td8=document.createElement("button")
        td8.innerText="Edit";
        const editFn=async(e)=>{
            let q1=window.prompt("Change the book name")
            let gh={"book_name":q1}
            let r=await fetch(`http://localhost:3000/abcd/${e.id}`,{method:"PATCH",body:JSON.stringify(gh),headers:{"Content-type":"application/json"}})
            let res=await r.json();
            show()
        }
        td8.addEventListener("click",()=>{
            editFn(e);
        })
        let td9=document.createElement("button")
        td9.innerText="Delete";
        const deleteFn=async(e)=>{
            let r=await fetch(`http://localhost:3000/abcd/${e.id}`,{method:"DELETE"})
            let res=await r.json();
            show()
        }
        td9.addEventListener("click",()=>{
            deleteFn(e);
        })
        
        trow.append(td1,td2,td3,td4,td5,td6,td7,td17,td8,td9);
        tbody.append(trow)
    })
}

show();
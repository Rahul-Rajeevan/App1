let a=document.querySelector("form");

const myFn=async()=>{
    event.preventDefault();
    let obj={
        email:a.email.value,
        password:a.pass.value
    }
    try
   { let r=await fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(obj),headers:{"Content-type":"application/json"}})
    let res=await r.json();
    localStorage.setItem("token",JSON.stringify(res.token));
    if(res.token)
{
    location.assign("admindash.html")
}
    }
    catch(err){
        console.log("Error");
    }
}

a.addEventListener("submit",myFn)
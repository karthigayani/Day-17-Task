var div=document.createElement("div");
var h1=document.createElement("h1");
h1.setAttribute("id","Count");
h1.innerText="10";
div.append(h1);
document.body.append(div);
var C1=document.getElementById("Count").innerText;
setTimeout(()=>{
    C1=C1-1;
    h1.innerHTML=C1;
    setTimeout(()=>{
        C1=C1-1;
        h1.innerHTML=C1;
        setTimeout(()=>{
            C1=C1-1;
            h1.innerHTML=C1;
            setTimeout(()=>{
                C1=C1-1;
                h1.innerHTML=C1;
                setTimeout(()=>{
                    C1=C1-1;
                    h1.innerHTML=C1;
                    setTimeout(()=>{
                        C1=C1-1;
                        h1.innerHTML=C1;
                        setTimeout(()=>{
                            C1=C1-1;
                            h1.innerHTML=C1;
                            setTimeout(()=>{
                                C1=C1-1;
                                h1.innerHTML=C1;
                                setTimeout(()=>{
                                    C1=C1-1;
                                    h1.innerHTML=C1;
                                    setTimeout(()=>{
                                        h1.innerHTML="Happy Independance Day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)


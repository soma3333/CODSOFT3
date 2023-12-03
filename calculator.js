const   dis=document.getElementById("display");
document.getElementById("zero").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+0; 
});
document.getElementById("one").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+1; 
});
document.getElementById("two").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+2; 
});
document.getElementById("three").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+3; 
});
document.getElementById("four").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+4; 
});
document.getElementById("five").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+5; 
});
document.getElementById("six").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+6; 
});
document.getElementById("seven").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+7; 
});
document.getElementById("eight").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+8; 
});
document.getElementById("nine").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+9; 
});
document.getElementById("plus").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'+';   
    });
document.getElementById("minus").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'-';   
    });
document.getElementById("multiply").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'*';   
    });
document.getElementById("division").addEventListener("click",()=>{
        dis.textContent=dis.innerHTML+'/';   
    }); 
document.getElementById("allclear").addEventListener("click",()=>{
    dis.textContent="";
     });
document.getElementById("delete").addEventListener("click",()=>{
    dis.textContent=dis.textContent.slice(0,-1);
     });
document.getElementById("dot").addEventListener("click",()=>{
    dis.textContent=dis.textContent+'.';
     });

document.getElementById("equal").addEventListener("click",()=>{
    let  opera=0,count=0;
    let  a=dis.textContent;
    for(let i=0;i<=a.length;i++){
        if(a[i]=='+'||a[i]=='-'||a[i]=='*'||a[i]=='/'){
            opera++;  }}
    
    while(count!=opera){
    let b,c,e,f;
    for(let i=0;i<=a.length;i++){
        if (a[i]=='/'){
            count++;
            if(count==opera){
                b=Number(a.slice(0,i));
                c=Number(a.slice(i+1,a.length));
                a=b/c;
                a=a.toString();
                if(a.length>10){
                    a=a.slice(0,10);  
                }
                a=Number(a);
                dis.textContent=a; }
            else{
                 for(let j=i+1;j<=a.length;j++){
                    if(a[j]=='+'||a[j]=='-'||a[j]=='*'||a[j]=='/'){
                       c=Number(a.slice(i+1,j));
                        f=(a.slice(j,a.length));
                        break;
                    }
                    else if(j==a.length-1){ 
                        c=Number(a.slice(i+1,a.length));
                        f="";
                    }
                }
                for(let k=i-1;k>=0;k--){
                     if(a[k]=='+'||a[k]=='-'||a[k]=='*'||a[k]=='/'){
                    e=(a.slice(0,k+1));
                    b=Number(a.slice(k+1,i)); 
                    b=b/c;
                    b=b.toString();
                    if(b.length>10){
                        b=b.slice(0,10);  
                    }
                    b=Number(b);
                    a=e+b+f;
                    dis.textContent=a;
                    console
                    break;
                    }
                    else if(k==0){
                     e=""
                     b=Number(a.slice(0,i));
                     b=b/c;
                     b=b.toString();
                     if(b.length>10){
                         b=b.slice(0,10);  
                     }
                     b=Number(b);
                     a=e+b+f;
                     dis.textContent=a;
                     }  }   }    
            }}

    for(let i=0;i<=a.length;i++){
        if (a[i]=='*'){
            count++;
            if(count==opera){
                b=Number(a.slice(0,i));
                c=Number(a.slice(i+1,a.length));
                a=b*c;
                dis.textContent=a; }
            else{
                for(let j=i+1;j<=a.length;j++){
                    if(a[j]=='+'||a[j]=='-'||a[j]=='*'||a[j]=='/'){
                        c=Number(a.slice(i+1,j));
                        f=(a.slice(j,a.length));
                        break;
                    }
                    else if(j==a.length-1){
                        c=Number(a.slice(i+1,a.length));
                        f="";
                    }
                }
            for(let k=i-1;k>=0;k--){
                if(a[k]=='+'||a[k]=='-'||a[k]=='*'||a[k]=='/'){
                    e=(a.slice(0,k+1));
                    b=Number(a.slice(k+1,i));
                    b=b*c;
                    a=e+b+f;
                    dis.textContent=a;
                    break;
            }
            else if(k==0){
                e=""
                b=Number(a.slice(0,i));
                b=b*c;
                a=e+b+f;
                dis.textContent=a;
            }}}    
    }}

    for(let i=0;i<=a.length;i++){
        if (a[i]=='+'){
            count++;
            if(count==opera){
                b=Number(a.slice(0,i));
                c=Number(a.slice(i+1,a.length));
                a=b+c;
                dis.textContent=a;}
            else{
                for(let j=i+1;j<=a.length;j++){
                    if(a[j]=='+'||a[j]=='-'||a[j]=='*'||a[j]=='/'){
                        c=Number(a.slice(i+1,j));
                        f=(a.slice(j,a.length));
                        break;
                    }
                    else if(j==a.length-1){
                        c=Number(a.slice(i+1,a.length));
                        f="";
                    }}
            for(let k=i-1;k>=0;k--){
                if(a[k]=='+'||a[k]=='-'||a[k]=='*'||a[k]=='/'){
                    e=(a.slice(0,k+1));
                    b=Number(a.slice(k+1,i));
                    b=b+c;
                    a=e+b+f;
                    dis.textContent=a;
                    i=0;
                    break;
            }
            else if(k==0){
                e=""
                b=Number(a.slice(0,i));
                console.log("b="+b)
                b=b+c;
                console.log("b="+b)
                a=e+b+f;
                dis.textContent=a;
                console.log("a="+a)
                i=0;
             } }  }    }
        if (a[i]=='-'){
            console.log("enter minus")
            count++;
            if(count==opera){
                b=Number(a.slice(0,i));
                c=Number(a.slice(i+1,a.length));
                a=b-c;
                dis.textContent=a;
            }
            else{
                for(let j=i+1;j<=a.length;j++){
                    if(a[j]=='+'||a[j]=='-'||a[j]=='*'||a[j]=='/'){
                        c=Number(a.slice(i+1,j));
                        f=(a.slice(j,a.length));
                        break;
                    }
                    else if(j==a.length-1){
                        c=Number(a.slice(i+1,a.length));
                        f="";
                    }
                }
            for(let k=i-1;k>=0;k--){
                if(a[k]=='+'||a[k]=='-'||a[k]=='*'||a[k]=='/'){
                    e=(a.slice(0,k+1));
                    b=Number(a.slice(k+1,i));
                    b=b-c;
                    a=e+b+f;
                    dis.textContent=a;
                    i=0;
                    break; }
            else if(k==0){
                e=""
                b=Number(a.slice(0,i));
                b=b-c;
                a=e+b+f;
                dis.textContent=a;
                i=0;
            } }  }    
    }}
}});




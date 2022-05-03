// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();



var newsData=JSON.parse(localStorage.getItem("news"));



let append = (ele) =>{

    document.getElementById("detailed_news").innerHTML=null;

    console.log(ele);

        // console.log(ele.title);
    
        let div=document.createElement("div");
        let div1=document.createElement("div");
    
        let img=document.createElement("img");
        img.src=ele.urlToImage;
        let title=document.createElement("h3");
        title.innerText=ele.content;
        let des=document.createElement("p");
        des.innerText=ele.description;
    
        div1.append(title, des);
        div.append(img, div1);
    
        document.getElementById("detailed_news").append(div)
};

append(newsData);
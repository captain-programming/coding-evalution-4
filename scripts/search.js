// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


let Searchdiv=document.getElementById("search_input");
let SLocalData=JSON.parse(localStorage.getItem("search"));


Searchdiv.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
        let value=Searchdiv.value;
        // console.log(value);
        SearchData(value);
    }
});



let SearchData= async (value) => {
    let query=value
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json();
        data=data.articles;
        append(data);
        // console.log(data);

    }catch(err){
        console.log(err);
    }
}

SearchData(SLocalData);

let append = (data) =>{

    document.getElementById("results").innerHTML=null;

    data.forEach(ele => {

        // console.log(ele.title);
    
        let div=document.createElement("div");
        let div1=document.createElement("div");
    
        let img=document.createElement("img");
        img.src=ele.urlToImage;
        let title=document.createElement("h3");
        title.innerText=ele.title;
        let des=document.createElement("p");
        des.innerText=ele.description;
    
        div1.append(title, des);
        div.append(img, div1);
        div.addEventListener("click", () =>{
            newsPage(ele);
        })
    
        document.getElementById("results").append(div)
    })
};

function newsPage(data){
    // console.log(data)
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href="./news.html";

}

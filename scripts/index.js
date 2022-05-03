// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


import sidebar from "../components/sidebar.js";

document.getElementById("sidebar").innerHTML=sidebar();


let Search=document.getElementById("search_input");

Search.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
        let value=Search.value;
        // console.log(Search.value);
        // SearchData(value);
        localStorage.setItem("search",JSON.stringify(value));    

        window.location.href="./search.html"
    }
});



// let SearchData= async (value) => {
//     let query=value
//     try{
//         let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

//         let data = await res.json();
//         data=data.articles;
//         console.log(data);
//         localStorage.setItem("search",JSON.stringify(data));    

//     }catch(err){
//         console.log(err);
//     }
// }

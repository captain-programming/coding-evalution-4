async function cSearch(id){
    
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`)

        let data=await res.json()
        // console.log(data);
        append(data)
    }catch(err){
        console.log(err);
    }

}


let append = (data) =>{

    document.getElementById("results").innerHTML=null;

    data=data.articles;
    data.forEach(ele => {

        console.log(ele.title);
    
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
}


function newsPage(data){
    // console.log(data)
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href="./news.html";

}


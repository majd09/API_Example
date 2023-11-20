

var request=[]
var demo=new XMLHttpRequest();



demo.addEventListener('readystatechange',function(){
    if(demo.readyState==4){
        request=JSON.parse(demo.responseText).recipes;

        displayData()


        console.log(request);
    }
})
demo.open('get','https://forkify-api.herokuapp.com/api/search?q=pizza');
demo.send();






function displayData(){
    
    var  AllProducts= ``;
    
    
    
for( i=0;i<request.length;i++){

    AllProducts+=`
    
    
    <div  class="inner" >

   

    <img src="${request[i].image_url }"  width="400px" height="400px" >
    <h3>${request[i].title}</h3>
    <a href="${request[i].source_url}" target="_blank">${request[i].publisher}</a>
    </div>

    `
}


document.getElementById('demo').innerHTML=AllProducts
}








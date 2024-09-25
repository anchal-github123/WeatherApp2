let url='https://api.openweathermap.org/data/2.5/weather?q=London&appid=74e1e2666bfeed6f0cef2f77e31848b6';
let UserInput=document.querySelector(".inputBox");
let SreachBtn=document.querySelector(".sreach_btn");

async function showWeatherData() {
  
        try{
          console.log(UserInput.value)
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${UserInput.value}&appid=74e1e2666bfeed6f0cef2f77e31848b6`);
        let data=await res.json();
        let {main,weather,wind,name} = data;

        document.querySelector('.name_of_city').innerHTML=name;
 // weather image chnge sec.....................................
        let weatherImage=document.querySelector('.weather_img');
     if(weather[0].main=="Clouds"){
        weatherImage.src="./Public/cloudy.jpg"
     }else if(weather[0].main=="Mist"){
 weatherImage.src="./Public/mist.png"
     }else if(weather[0].main=="Rain")
     {
         weatherImage.src="./Public/Rainy.png"
     }
     else if(weather[0].main=="Clear"){
         weatherImage.src="./Public/Clear.png"
     }
     else if(weather[0].main=="Haze"){
        weatherImage.src="./Public/Hazy.png"
    }
    else{
         weatherImage.src="./Public/Clear.png"
    }
// wether image chnge sec end=====================================================

// weather temp sec start ==================================================================
let watherTempSec=document.querySelector('.weather_temp_sec').children;
watherTempSec[0].innerHTML=`<p>${main.temp}<sup>0</sup></p>`;
watherTempSec[1].innerHTML=weather[0].main;
// weather temp sec end ==================================================================
document.querySelector(".humudity-num").innerHTML=main.humidity
document.querySelector(".windsped-num").innerHTML=wind.speed

// humidity and windSpeed========================================================


     console.log(data)
     UserInput.value=""  ;
  
}
        catch(err){
            console.log(err);

        }
  
  


}
SreachBtn.addEventListener("click",showWeatherData)

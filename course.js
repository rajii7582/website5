
 var counter = 1;
  
setInterval(function(){
    for(var i = 1;i <=5; i++){
        document.getElementById('slide' + i) .style.display ='none';
    }
  document.getElementById('slide' + counter).style.display = 'block';
     counter ++;
     if(counter > 5){
        counter=1;
     }
},3000);

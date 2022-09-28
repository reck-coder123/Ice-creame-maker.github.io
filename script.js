let btn1=document.getElementById("increment");
let btn2=document.getElementById("decrement");




function ice(){
    var arr=[6,5,4,3,2,1];
    var arr1=[];
    btn1.addEventListener("click", function(){
        let i=0;
        
            document.getElementById("rect-"+arr[i]).style.visibility="visible";
            arr1.unshift(arr[i]);
            arr.shift();
           
    });
    btn1.addEventListener("click", function(){ console.log('yes')});

    btn2.addEventListener("click",function(){
        let j=0;
        
            document.getElementById("rect-"+arr1[j]).style.visibility="hidden";
            arr.unshift(arr1[j])
            arr1.shift();
       
    })

}

ice();




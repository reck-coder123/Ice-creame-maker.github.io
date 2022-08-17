let btn1=document.getElementById("increment");
let btn2=document.getElementById("decrement");




function ice(){
    arr=[6,5,4,3,2,1];
    arr1=[];
    btn1.addEventListener("click",function(){
        for(var i=0; i<arr.length; i++){
            document.getElementById("rect"+arr[i]).style.visibility="visible";
            arr1.unshift(arr[i]);
            arr.shift();
            break;
    
        }
    });

    btn2.addEventListener("click",function(){
        for(var j=0; j<arr1.length;j++){
            document.getElementById("rect"+arr1[j]).style.visibility="hidden";
            arr.unshift(arr1[j])
            arr1.shift();
            break;
        }
    })

}

ice();




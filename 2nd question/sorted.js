function arrsorted() {

    let arr = [7,0,8,4,2,5,1,3];

 

    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
           
            }

        }

        
    }
    console.log(arr);
    document.write(arr);
    
}

arrsorted()
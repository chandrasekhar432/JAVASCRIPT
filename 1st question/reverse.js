function reverse(){
    let st = "This is a sunny day";
    let revers = "";
    

    let temp = " ";
    for(let i=0;i<st.length;i++){
        if(st.charAt(i)===' '){
            for(let j = temp.length-1;j>=0;j--){
                revers=revers+temp.charAt(j)+"";
            }
            temp=" ";
        }
        else{
            temp=temp+st.charAt(i);
        }
    }
            for(let j = temp.length-1;j>=0;j--){
                revers=revers+temp.charAt(j);
            }

    console.log(revers);
    document.write(revers);

   
}
reverse();
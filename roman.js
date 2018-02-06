function romanNumeralConverter(roman) {
    var arr = roman.split(""); 
    var arr2 = [];
    var integer = 0;
     for(i = 0; i < arr.length; i++){
         if( arr[i] == 'I'){
             arr2.push(1);  
         } else if(arr[i] === 'V') {
             arr2.push(5);
         } else if (arr[i] === 'X'){
             arr2.push(10);
         } else if (arr[i] === 'L'){
            arr2.push(50);
         } else if (arr[i] === 'C'){
                arr2.push(100);
        }
     } 
     for (var i = 0; i < arr2.length; i++) {
        if( i === 0){
            integer += arr2[i]
        }  else if (arr2[i] === arr2[i-1]){
            integer += arr2[i];
        } else if (arr2[i] < arr2[i-1]){
            integer += arr2[i];
        }  else if (arr2[i] > arr2[i-1]){
            var subAdder = arr2[i] - arr2[i-1] - arr2[i-1];
            integer += subAdder; 
        }    
    }    return integer;     
}

module.exports = romanNumeralConverter;

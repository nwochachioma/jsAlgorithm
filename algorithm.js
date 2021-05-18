// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
function convertFahrToCelsius(f){
    var c;
    var f;
   //  for values of boolean
    if(typeof f === "boolean"){
      console.log(JSON.stringify(f)+ " is not a valid number but" + " " + typeof(f));
      return f + " is not a valid number but a/an " + " " + typeof(f) ;
    }

   //  for values of array
   else if(Array.isArray(f)){
      console.log(JSON.stringify(f)+ " is not a valid number but a/an array");
      return f + " is not a valid number but a/an array";
    }

   //   for values of array, object and others
        else if(typeof(f) === "object"){
         var value = JSON.stringify(f);
         console.log(value + " is not a valid number but a/an" + " " + typeof(f));
         return value + " is not a valid number but a/an " + " " + typeof(f) ;
        }
   
   //  for values of strings
  else if(typeof f === "string"){
      var removeString = parseInt(f);
      // strings without "" but is a number
      if(!isNaN(removeString) || removeString == 0){
         c = ( ( f - 32 ) / 1.8 );
         var answer = parseFloat(c.toFixed(4));
         console.log(typeof(answer));
         console.log(answer);
         return answer;
      }
       // strings without "" but is not a number
      else if( isNaN(removeString)){
        var value = JSON.stringify(f);
        console.log(value + " is not a valid number but a/an" + " " + typeof(f));
        return value + " is not a valid number but a/an " + " " + typeof(f) ;
      }
   }

   //  for values of numbers
    else {
        c = ( ( f - 32 ) / 1.8 );
        var answer = parseFloat(c.toFixed(4));
        console.log(answer);
        return answer;
    }
}

/* test case
 convertFahrToCelsius(37);
 convertFahrToCelsius("");
 convertFahrToCelsius([]);
 convertFahrToCelsius("0");
 convertFahrToCelsius([1,2,3,4]);
 convertFahrToCelsius({obj:1 , name: "sarah"});
 convertFahrToCelsius("bola");
 convertFahrToCelsius([]);
 convertFahrToCelsius(true);
*/

/*2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
logs the resulting array to the console then returns the resulting array.
*/
function checkYuGiOh(n){
    var n;
     if (isNaN(n)){
        if (Array.isArray(n)){
            console.log("invalid parameter: " + JSON.stringify(n));
         } else if (typeof(n)=="object"){
            console.log("invalid paramter: " + JSON.stringify(n));
         } else {
            console.log("invalid paramter: " + JSON.stringify(n));
         }
     }
     else {
         var ans;

         //assigning the check function to a variable and passing the parameter in the checkYuGiOh function to it
         ans = create(n);

         //a function that creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh"
         function create(n){
            var n;
            var arr = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                 
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                 
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                 
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                 
                } else  if (i%5==0){
                   arr.push("oh");
                 
                } else  if (i%5==0){
                   arr.push("oh");
                 
                } else  if (i%3==0){
                   arr.push("gi");
                 
                } else  if (i%2==0){
                   arr.push("yu");
                 
                }
                else{
                   arr.push(i);
                 
                }
            }
            console.log(arr);
            return arr;
           }
     }
}
/*
 checkYuGiOh(29);
 checkYuGiOh("29");
 checkYuGiOh( '/');
 checkYuGiOh("kenny");
 checkYuGiOh([1,2,3,4]);
 checkYuGiOh({name: "kenny", age: 26});
 */
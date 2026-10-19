// Result Sheet
 let num = 82;

        document.getElementById("marks").innerHTML = num;

        if (num >= 80 && num <= 100) {
            document.getElementById("result").innerHTML = "Result A+";
        } else if (num >= 70 && num <= 79) {
            document.getElementById("result").innerHTML = "Result A";
        } else if (num >= 60 && num <= 69) {
            document.getElementById("result").innerHTML = "Result B";
        } else if (num >= 50 && num <= 59) {
            document.getElementById("result").innerHTML = "Result C";
        } else if (num >= 0 && num <= 32) {
            document.getElementById("result").innerHTML = "Result Failed";
        } else {
            document.getElementById("result").innerHTML = "Invalid Marks";
        }
    




        // Bills 
        // Main course = 2500/=
        // soft drinks = 300/=
        // IceCream = 500/=
        // Total cost = 3300/=
        // frds num =10 person
        // Per Head = 330/=

        function bills (mainCourse, softDrinks, iceCream, numOfFrds){
          let totalCost = mainCourse + softDrinks + iceCream;
          let perHeadCost = totalCost/numOfFrds;


          console.log(`Per person Cost ${perHeadCost}`);

          document.getElementById("bill").innerHTML = `
        <p>Main Course: ৳${mainCourse}</p>
        <hr>
        <p>Soft Drinks: ৳${softDrinks}</p>
        <hr>
        <p>Ice Cream: ৳${iceCream}</p>
        <hr>
        <h3>Total Cost: ৳${totalCost}</h3>
        <hr>
        <p>Number of Friends: ${numOfFrds}</p>
        <hr>
        <h3>Per Person Cost: ৳${perHeadCost}</h3>
    `;
          
        }
        bills(2500,300,500,10);
    
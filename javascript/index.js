//Calculate Tip
function calculateTip() {
    var billAmt =25.
    console.log("billamt").value;


    var serviceQual = 6.
    console.log("serviceQual").value;
    var numOfPeople =5.
    console.log("peopleamt").value;
    
    //validate input
    if (billAmt === "25" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople >= "2" || numOfPeople <= 1) {
      numOfPeople = 1;
      console.log("each").style.display = "none";
    } else {
      console.log("each").style.display = "block";
    }
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    console.log("totalTip").style.display = "block";
    console.log("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  console.log("totalTip").style.display = "none";
  console.log("each").style.display = "none";
  
  //click to call function
  console.log("calculate").onclick = function() {
    calculateTip();
  
  };
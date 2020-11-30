
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
        if (question1 ==  "1-2 hrs a day") {
            correct++;
        }
        if (question2 ==  "0-2 servings") {
            correct++;
        }
        if (question3 ==  "less then 5 hours") {
            correct++;
        }
    
    var messages = [ "Ashwagandha and Valerian root tea is your match! The most common use is for treating high stress and sleeping problem",
                    "Chamomile tea is the best match for you! It’s been around for thousands of years, and used mostly for its calming effect! Good for mild stress" , 
                    "Good job staying on top of your health! Consider rosehip tea as an added layer of protection that offers a boost in vitamin C and antioxidants. "];
    
   //supposed to be what gets the pics to match with the messages// var pictures = ["img/https://c.ndtvimg.com/2020-09/toe36em_tulsi-tea_625x300_16_September_20.jpg", "img/https://c.ndtvimg.com/2019-04/1qk1ppl8_chamomile-tea_625x300_16_April_19.jpg", "img/https://previews.123rf.com/images/madeleinesteinbach/madeleinesteinbach1801/madeleinesteinbach180100146/93862590-fresh-rose-hips-rose-hip-tea-and-honey-on-a-wooden-table.jpg];
    
    
  
    var range;
        
        if(correct < 1){
            range = 2;
        }
        if(correct > 0 && correct < 3) {
            range = 1;
        }
        if(correct > 2) {
            range = 0;
        }
    
    
    
    
   var elem = document.getElementById("after_submit").style.visibility = "visible";
  
   var elem = document.getElementById("message").innerHTML = messages[range]; 
  // var elem = document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  //supposed to call the pic// var elem = document.getElementByID("pictures").src =pictures[range];
}
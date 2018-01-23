// Function to excute block of code.
function evenNumbers(){
    var num = 50;
    
    for(var i = 0; num > i; i++)
        {
            // This code checks for odd numbers.
            if(i%2!=0)
                {
                    document.write(i + "Odd" + "<br>");
                }
            else
                {
                    document.write(i + "Even" + "<br>");
                }
        }
}
// Excute function.
evenNumbers();
$(document).ready(function() {

    var _num1 = 0;
    var _num2 = 0;
    
    var _decimalButtonClicked = 0;
    var _mathSignClicked = 0;
    var _buttonOn = false;
    var _clearButton = false;
    var _mathSignTurnOn = false;
    var _firstButtonCantBeMathSign = false;
    var _mathSign = " ";
    var _sum = " ";
    var _num = " ";
    
    var _module = function(a, b){
        if(b === undefined){
            b = 0;
        }
        return a % b;
    }
    var _division = function(a, b){
        if(b === undefined){
            b = 0;
        }
        return a / b;
    }
    var _multiple = function(a, b){
        if(b === undefined){
            b = 0;
        }
        return a * b;
    }
    var _subtract = function(a,b){
        if(b === undefined){
            b = 0;
        }
        return a - b;
    }
    
    var _add = function(a,b){
        if(b === undefined){
            b = 0;
        }
        return a + b;
    }
    
    var _buttonMathSignAdd = false;
    var _buttonMathSignSubtract = false;
    var _buttonMathSignMultiple = false;
    var _buttonMathSignDivision = false;
    var _buttonMathSignModule = false;
    var _buttonMathSignDecimal = false;
    var _buttonMathSignEqual = false;
    
    
    
    $('#button1').click(function(e){
    e.preventDefault();
        
    console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
        
    
    
    if(_buttonOn == false){
    document.getElementById("OutputScreen").value = "ON";
    _buttonOn = true;
    }
    

                        
  });
    
    $('#button2').click(function(e){
    e.preventDefault();
        
    _buttonMathSignModule = false;
    _buttonMathSignDivision = false;
    _buttonMathSignMultiple = false;
    _buttonMathSignSubtract = false;
    _buttonMathSignDecimal = false;
    _buttonMathSignEqual = false;
    _buttonMathSignAdd = false;
        
    _firstButtonCantBeMathSign = false;
        
    console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
    
    console.log("_sum.length:" + _sum.length);    
    if(_buttonOn == true){
        if(_clearButton == false){
            _num = " ";
            _mathSign = " ";
            _sum = " ";

            document.getElementById("OutputScreen").value = _sum;
            _clearButton = true;
            _mathSignTurnOn = false;
            _decimalButtonClicked = 0;
            _mathSignClicked = 0;
        }
     }
    
  });
    
        
      $('#button3').click(function(e){
      e.preventDefault();
          
     _clearButton = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignSubtract = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
          
     
      
          
      if(_buttonOn == true && _sum.length < 7 && _firstButtonCantBeMathSign == true && _mathSignClicked == 0){
        if(_mathSignTurnOn == true){
            _mathSign = "%";
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        } 
        else if(_buttonMathSignModule == false){ 
            _mathSign = "%";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignModule = true;
            _mathSignTurnOn = true;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        }
        else if(_buttonMathSignModule == true){
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _mathSignTurnOn = true;
        }
      }
      
      
   });
    
        
      $('#button4').click(function(e){
      e.preventDefault();
      
     _clearButton = false;
          
     _buttonMathSignModule = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignSubtract = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
          
       console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn); 
    
     
          
     if(_buttonOn == true && _sum.length < 7 && _firstButtonCantBeMathSign == true && _mathSignClicked == 0){ 
       if(_mathSignTurnOn == true){
            _mathSign = "/";
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        } 
        else if(_buttonMathSignDivision == false){ 
            _mathSign = "/";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignDivision = true;
            _mathSignTurnOn = true;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        }
        else if(_buttonMathSignDivision == true){
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _mathSignTurnOn = true;
        }
      }
  });
     
        
      $('#button5').click(function(e){
      e.preventDefault();
      
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignSubtract = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
          
     _deciamlButtonClicked = 0;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
      
     if(_buttonOn == true && _sum.length < 7 && _firstButtonCantBeMathSign == true && _mathSignClicked == 0){ 
       if(_mathSignTurnOn == true){
            _mathSign = "X";
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        } 
        else if(_buttonMathSignMultiple == false){ 
            _mathSign = "X";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignMultiple = true;
            _mathSignTurnOn = true;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        }
        else if(_buttonMathSignMultiple == true){
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _mathSignTurnOn = true;
        }
      }
  });
      $('#button6').click(function(e){
      e.preventDefault();
      
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
          
     
    
     if(_buttonOn == true && _sum.length < 7 && _firstButtonCantBeMathSign == true && _mathSignClicked == 0){ 
       if(_mathSignTurnOn == true){
            _mathSign = "-";
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        } 
        else if(_buttonMathSignSubtract == false){ 
            _mathSign = "-";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignSubtract = true;
            _mathSignTurnOn = true;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        }
        else if(_buttonMathSignSubtract == true){
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _mathSignTurnOn = true;
        }
      }     
      
      
     
  });
     $('#button7').click(function(e){
      e.preventDefault();
         
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
     
     _firstButtonCantBeMathSign = true;
         
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
         
      if(_buttonOn == true && _sum.length < 7){
            _num = "7";
            _sum = _sum + _num;
            document.getElementById("OutputScreen").value = _sum;
        }
    
  });
     $('#button8').click(function(e){
      e.preventDefault();
         
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
         
     _firstButtonCantBeMathSign = true;
     
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
     
      if(_buttonOn == true && _sum.length < 7){
      _num = "8";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
    
  });
     $('#button9').click(function(e){
      e.preventDefault();
         
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
         
     _firstButtonCantBeMathSign = true;
         
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "9";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button10').click(function(e){
      e.preventDefault();
     
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
     _firstButtonCantBeMathSign = true;
      
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
          
      if(_buttonOn == true && _sum.length < 7){
      _num = "4";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button11').click(function(e){
      e.preventDefault();
          
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
     
     _firstButtonCantBeMathSign = true;
     
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "5";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button12').click(function(e){
      e.preventDefault();
      
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
     _firstButtonCantBeMathSign = true;
     
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn); 
    console.log("_sum.length:" + _sum.length);
    
      if(_buttonOn == true && _sum.length < 7){
      _num = "6";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      
      }
  });
      $('#button13').click(function(e){
      e.preventDefault();
    
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
     _firstButtonCantBeMathSign = true;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "1";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button14').click(function(e){
      e.preventDefault();
           
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
     _firstButtonCantBeMathSign = true;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "2";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button15').click(function(e){
      e.preventDefault();
          
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
     _firstButtonCantBeMathSign = true;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "3";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });
      $('#button16').click(function(e){
      e.preventDefault();
          
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignDecimal = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
     _mathSignTurnOn = false;
          
   
      console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);    
     
      
      if(_buttonOn == true && _sum.length < 7){
      _num = "0";
      _sum = _sum + _num;
      document.getElementById("OutputScreen").value = _sum;
      }
  });   
      $('#button17').click(function(e){
      e.preventDefault();
      
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignEqual = false;
     _buttonMathSignAdd = false;
     _buttonMathSignSubtract = false;
          
     _firstButtonCantBeMathSign = true;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
          
     if(_buttonOn == true && _sum.length < 7 && _decimalButtonClicked <= 1){ 
       if(_mathSignTurnOn == true){
            _mathSign = ".";
            _sum = _sum + _mathSign;
            document.getElementById("OutputScreen").value = _sum;
            _decimalButtonClicked++;
        } 
        else if(_buttonMathSignDecimal == false){ 
            _mathSign = ".";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignDecimal = true;
            _decimalButtonClicked++;
            
        }
        else if(_buttonMathSignDecimal == true){
            document.getElementById("OutputScreen").value = _sum;
            _decimalButtonClicked++;
        }
      }     
  });
      $('#button18').click(function(e){
      e.preventDefault();
          
     _clearButton = false;
     _buttonMathSignModule = false;
     _buttonMathSignDivision = false;
     _buttonMathSignMultiple = false;
     _buttonMathSignEqual = false;
     _buttonMathSignSubtract = false;
     _buttonMathSignDecimal = false;
          
     console.log("_buttonMathSignModule:" + _buttonMathSignModule);
    console.log("_buttonMathSignDivision:" + _buttonMathSignDivision);
    console.log("_buttonMathSignMultiple:" + _buttonMathSignMultiple);
    console.log("_buttonMathSignSubtract:" + _buttonMathSignSubtract);
    console.log("_buttonMathSignDecimal:" + _buttonMathSignDecimal);
    console.log("_buttonMathSignEqual:" + _buttonMathSignEqual);
    console.log("_buttonMathSignAdd:" + _buttonMathSignAdd);
    console.log("_firstButtonCantBeMathSign:" + _firstButtonCantBeMathSign);
    console.log("_buttonOn:" + _buttonOn);
    console.log("_clearButton:" + _clearButton);
    console.log("_decimalButtonClicked:" + _decimalButtonClicked);
    console.log("_mathSignClicked:" + _mathSignClicked);
    console.log("_mathSignTurnOn:" + _mathSignTurnOn);
     
    
     if(_buttonOn == true && _sum.length < 7 && _firstButtonCantBeMathSign == true && _mathSignClicked == 0){ 
       if(_mathSignTurnOn == true){
            _mathSign = "+";
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _buttonMathSignAdd = true;
           
        } 
        else if(_buttonMathSignAdd == false){ 
            _mathSign = "+";  
            _sum = _sum + _mathSign;
            
            document.getElementById("OutputScreen").value = _sum;
            _buttonMathSignAdd = true;
            _mathSignTurnOn = true;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
        }
        else if(_buttonMathSignAdd == true){
            document.getElementById("OutputScreen").value = _sum;
            _mathSignClicked++;
            _deciamlButtonClicked = 0;
            _mathSignTurnOn = true;
        }
      }     
      
      
  });
      $('#button19').click(function(e){
      e.preventDefault();
                          
      
      if(_buttonOn == true && _firstButtonCantBeMathSign == true){
          
            console.log(_sum);
          
          if(_sum.includes("%")){
              var replaced1 = _sum.replace("%", " ");
              var replaced2 = replaced1.split(" ");
              var replaced3 = parseInt(replaced2[1]);
              console.log("replaced2[1]:" + replaced2[1])
              console.log("replaced2[replaced2.length-1]:" + replaced2[replaced2.length-1]);
              var replaced4 = parseInt(replaced2[replaced2.length - 1])
              console.log(replaced1);
              console.log(replaced2);
              var finalResults = _module(replaced3, replaced4);
          
    
          
              document.getElementById("OutputScreen").value = finalResults;
          }
           if(_sum.includes("/")){
              var replaced1 = _sum.replace("%", " ");
              var replaced2 = replaced1.split(" ");
              var replaced3 = parseInt(replaced2[1]);
              console.log("replaced2[1]:" + replaced2[1])
              console.log("replaced2[replaced2.length-1]:" + replaced2[replaced2.length-1]);
              var replaced4 = parseInt(replaced2[replaced2.length - 1])
              console.log(replaced1);
              console.log(replaced2);
              var finalResults = _division(replaced3, replaced4);
          
    
          
              document.getElementById("OutputScreen").value = finalResults;
           
          }
           if(_sum.includes("X")){
              var replaced1 = _sum.replace("X", " ");
              var replaced2 = replaced1.split(" ");
              var replaced3 = parseInt(replaced2[1]);
              console.log("replaced2[1]:" + replaced2[1])
              console.log("replaced2[replaced2.length-1]:" + replaced2[replaced2.length-1]);
              var replaced4 = parseInt(replaced2[replaced2.length - 1])
              console.log(replaced1);
              console.log(replaced2);
              var finalResults = _multiple(replaced3, replaced4);
          
    
          
              document.getElementById("OutputScreen").value = finalResults;
          
        }
           if(_sum.includes("-")){
              var replaced1 = _sum.replace("-", " ");
              var replaced2 = replaced1.split(" ");
              var replaced3 = parseInt(replaced2[1]);
              console.log("replaced2[1]:" + replaced2[1])
              console.log("replaced2[replaced2.length-1]:" + replaced2[replaced2.length-1]);
              var replaced4 = parseInt(replaced2[replaced2.length - 1])
              console.log(replaced1);
              console.log(replaced2);
              var finalResults = _subtract(replaced3, replaced4);
          
    
          
              document.getElementById("OutputScreen").value = finalResults;
           
        }
           if(_sum.includes("+")){
              var replaced1 = _sum.replace("+", " ");
              var replaced2 = replaced1.split(" ");
              var replaced3 = parseInt(replaced2[1]);
              console.log("replaced2[1]:" + replaced2[1])
              console.log("replaced2[replaced2.length-1]:" + replaced2[replaced2.length-1]);
              var replaced4 = parseInt(replaced2[replaced2.length - 1])
              console.log(replaced1);
              console.log(replaced2);
              var finalResults = _add(replaced3, replaced4);
          
    
          
              document.getElementById("OutputScreen").value = finalResults;
          
        }
      }
      
  });
  
  });

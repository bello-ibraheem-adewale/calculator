



let outputScreen = document.getElementById("output-screen");
function display(num){
outputScreen.value += num;
}

function calculate(){
    outputScreen.value = eval(outputScreen.value);
}





function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}

function cleardisplay(){
    outputScreen.value = "";
}


function sin(){
    outputScreen.value = Math.sin(outputScreen.value * Math.PI/180)


    }

    function cos(){


        outputScreen.value = Math.cos(outputScreen.value * Math.PI/180)

    }


    function tan(){
        outputScreen.value = Math.tan(outputScreen.value * Math.PI/180)
    }


    function log(){
        outputScreen.value = Math.log.outputScreen.value
    }


    function sqrt(){
        outputScreen.value = Math.sqrt(outputScreen.value)


    }

    function pow(){
        outputScreen.value = Math.pow(outputScreen.value)
    }


    
        switch (off) {
            case value:
                
                break;
        
            default:
                break;
        }
    
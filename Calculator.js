let displayvalue = document.getElementById("display");
        let current="";
        let previous="";
        let operation;
        let res;
        function append(x){
            current += String(x);
            displayvalue.textContent= current;
        }
        function sym(p){
            previous = current;
            current = "";
            operation = p;
        }
        function modulo(){
            current = current / 100;
            displayvalue.textContent = current;
        }
        function backspace(){
            current = current.slice(0,-1);
            displayvalue.textContent = current;
        }
        function result(){
            if(previous!="" && current!=""){
            switch(operation)
            {
                case '+':
                res = parseFloat(previous) + parseFloat(current);
                break;
                case '-':
                res = parseFloat(previous) - parseFloat(current);
                break;
                case '/':
                res = parseFloat(previous) / parseFloat(current);
                break;
                case '*':
                res = parseFloat(previous) * parseFloat(current);
                break;
                default:
                res = 0;
            }
        }
        else{
            res = "Error"
            
        }
            current = res;
            displayvalue.textContent=res;
        }
        function cleardisplay(){
            res="";
            current="";
            displayvalue.textContent= "0";
            operation=" ";
        }
        function decimal(){
            if(current!="" && current.includes('.')==false){
                current += '.';
                displayvalue.textContent = current;
            }
        }
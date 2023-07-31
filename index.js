function PrintTable() {
    var Startjs = document.getElementById('StartT').value;
    var Endjs = document.getElementById('EndT').value;
    var Requiredjs = document.getElementById('PrintTable').value;


    var Tab = document.getElementById('Table');
    
    
    if (Startjs < Endjs) {
        let tablejs = "";
        for (let t = Startjs; t <= Endjs; t++) {
            tablejs +=`${Requiredjs} x ${Startjs++} = ${Requiredjs*t}<br> `;
        }
        Tab.innerHTML = tablejs;
    }  else {
       
        Tab.innerHTML = "Entry Invalid";
    }
}

        

   

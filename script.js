const checkBoxs = document.querySelectorAll('.container input[type="checkbox"]');
let lcheck;
 function check(e){
     let checks = false;
     if(e.shiftKey && this.checked){
         checkBoxs.forEach(checkbox => {
             if(checkbox === this || checkbox === lcheck){
                checks = !checks;
             }
             if(checks){
                 checkbox.checked=true
             }
         })
     }
 }
 checkBoxs.forEach(checkbox => checkbox.addEventListener('click', check));

 
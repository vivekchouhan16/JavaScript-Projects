const expenseform=document.getElementById("expenseForm");
const expenselist=document.getElementById("exlist");
expenseform.addEventListener("submit",
    function(event){
       event.preventDefault();
       const des=document.getElementById("Description").value ;
       const cate=document.getElementById("category").value;
       const amnt=document.getElementById("amount").value;
       if(document && category && !isNaN(amount)){
        const newrow=document.createElement('tr')
        newrow.innerHTML=`<td>${des}</td>
        <td>${category}</td>
        <td>${amnt}</td>`
        expenselist.appendChild(newrow)
        document.getElementById('des').value=''
       document.getElementById('cate').value=''
       document.getElementById('amnt').value=''
       }
       else{
        alert("fill all fields");
       }
       
    })
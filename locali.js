let z1=document.getElementById("rikki-form");
const z2 =() => {
    let z3= localStorage.getItem("rikki-ent");
    if(z3){
        z3=JSON.parse(z3);

    }else{
        z3=[];
    }
    return z3;
}

let z4 =z2();
const z5 =() =>{
    const z6=z2();
    const z7=z6.map((entry) => {
        
        const namerikki= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailrikki= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordrikki= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobrikki= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsrikki= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowrikki= `<tr>${namerikki} ${emailrikki} ${passwordrikki} ${dobrikki} ${acceptTermsrikki}</tr>`;
        return rowrikki;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${z7} </table>`;
    let details=document.getElementById("rikki-ent");
    details.innerHTML = table;
}
const z8 = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    z4.push(entry);
    localStorage.setItem("rikki-ent",JSON.stringify(z4));
    z5();
}
z1.addEventListener("submit",z8);
z5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

   
        function valdatecondition()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let rikki1=new Date(dob);
            var todaydate = new Date(); 
            var age=parseInt(todaydate.getFullYear()) - parseInt(rikki1.getFullYear());
            if (todaydate.getMonth() < rikki1.getMonth() || (todaydate.getMonth() === rikki1.getMonth() && todaydate.getDate() < rikki1.getDate()))
             age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity(" Entered age is not valid and age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

//=======================================email=========================================
const z9 = document.getElementById("email");

z9.addEventListener("input", () => validate(z9));

function validate(z10) {
  if (z10.validity.typeMismatch) {
    z10.setCustomValidity("Wrong email format");
    z10.reportValidity();
  } else {
    z10.setCustomValidity("");
  }
}
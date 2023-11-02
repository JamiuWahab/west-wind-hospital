const childName = document.querySelector("#childName")
const childAge = document.querySelector("#childAge")
const familyIncome = document.querySelector("#familyIncome")
const hasDisease = document.querySelector("#hasDisease")
const submit = document.querySelector("#submit")
const msg = document.querySelector(".msg")


const vaccineCheck = (childName, childAge, familyIncome, hasDisease) => {
    

    if (parseInt(childAge) < 4 && parseInt(familyIncome) < 4500 && hasDisease == "No"){
        const output = `Congratulations, ${childName} is eligible for the vaccine`
        return output
        
    }else{
        const output = `Sorry, ${childName} is not eligible for the vaccine`
        return output
    }
}


submit && submit.addEventListener("click", (e) =>{
    e.preventDefault()
    
    console.log(childName.value)
    console.log(childAge.value)
    console.log(familyIncome.value)
    console.log(hasDisease.value)
    const result = vaccineCheck(childName.value, childAge.value, familyIncome.value, hasDisease.value)
    
    msg.innerHTML = result
    msg.style.display = "block"
})
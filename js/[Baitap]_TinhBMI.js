function calBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = weight/(height*height);
    alert("Your BMI: "+bmi);
    if (bmi<18.5){
        alert("Underweight");
    }else if (bmi <= 25){
        alert("Normal");
    }else if (bmi<=30){
        alert("Overweight");
    }else{
        alert("Obese")
    }
}
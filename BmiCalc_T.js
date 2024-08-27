const ps = require('prompt-sync');
const prompt = ps();

function get_user_name(intake){
try {
    const name = prompt(intake);
    if(!isNaN(name) || !isNaN(name[0])){  // Only reject if name starts with a number. Splice
        throw Error("Name is not valid");
    }
    else return name;
} catch (e) {
    console.log(e.stack);
    // return get_user_name("Please enter a valid name: ")
    counter()
}
}

i = 0
function counter(){
    while(i < 2){
        i++ 
        return get_user_name("Please enter a valid name: ")
    }
}

function get_user_details(ask){
    try{
        let value = parseFloat(prompt(ask));
        if(!isNaN(value)){
            return value 
        } else{
            throw Error("Not a valid input!")
        }  
    }
    catch(e){
        console.log(e.stack);
        const new_value = get_user_details("Please enter a number or a decimal: ")
        return new_value
    }
}

function check_BMI(height , weight){
    return(weight/( height * height ))
}

function weight_category(bmi){
    if (bmi < 18.5){
        console.log(name_r + " you are underweight. You need to get some food")
    } else if (bmi > 18.5 && bmi <= 24.9){
        console.log(name_r + " you have a good weight. Keep it up")
    } else if ( bmi > 24.9 && bmi <= 29.9){
        console.log(name_r + " you are overweight. You need to get some exercise")
    } else if (bmi > 29.9 && bmi < 39.9){
        console.log(name_r + " you are obese. You really need to get some exercise and check your diet")
    } else{
        console.log(name_r + " you are severely obese")
    }
}

let prog = true
while(prog){
    name_r = get_user_name("Please enter your name: ")
    const height = get_user_details("Please enter your height(m): ")
    const weight = get_user_details("Please enter your weight(kg): ")
    const BMI = check_BMI(height , weight)
    console.log("Your BMI is " + BMI)
    weight_category(BMI)

    let ques = prompt("Would you like to check BMI again? Yes/No: ").toLowerCase()
    if(ques === "no"){
        prog = false
    }
    else if(ques === "yes"){
        prog = true
    }
    else{
        console.log("Invalid Input. Please enter 'Yes' or 'No'") 
        invalid_input()    
        break
    }
}


function invalid_input(){
    let new_ques = prompt("Would you like to check BMI again? Yes/No: ").toLowerCase()
    if(new_ques == 'yes'){
        while_loop()
    } else if(new_ques == 'no'){
        console.log("Thank you for using our BMI Calculator")
    } 
}

function while_loop(){
    while(prog){
        name_r = get_user_name("Please enter your name: ")
        const height = get_user_details("Please enter your height(m): ")
        const weight = get_user_details("Please enter your weight(kg): ")
        const BMI = check_BMI(height , weight)
        console.log("Your BMI is " + BMI)
        weight_category(BMI)
    
        let ques = prompt("Would you like to check BMI again? Yes/No: ").toLowerCase()
        if(ques === "no"){
            prog = false
        }
        else if(ques === "yes"){
            prog = true
        }
        else{
            console.log("Invalid Input. Please enter 'Yes' or 'No': ") 
        }
    }
}

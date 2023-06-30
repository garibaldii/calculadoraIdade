function age(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    
    current_data = new Date();

    year_result = 2023 - year;
    month_result = (current_data.getMonth() + 1) - month;
    day_result = current_data.getDate() - day;

    if (day_result < 0 ){
        day_result += 30
        month_result -= 1
    }

    if (month_result < 0){
        month_result += 12
        year_result -= 1
    }


    
    document.getElementById("year_2").innerHTML = year_result;
    document.getElementById("month_2").innerHTML = month_result;
    document.getElementById("day_2").innerHTML = day_result;
    
}
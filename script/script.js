function age() {
    var year = document.getElementById("year").value;
    var year_input = document.getElementById("year");
    var year_error = document.getElementById("year_error");

    var month = document.getElementById("month").value;
    var month_input = document.getElementById("month");
    var month_error = document.getElementById("month_error")

    var day = document.getElementById("day").value;
    var day_input = document.getElementById("day");
    var day_error = document.getElementById("day_error");

    var error_occurred = false;

    current_data = new Date();

    year_result = 2023 - year;
    month_result = (current_data.getMonth() + 1) - month;
    day_result = current_data.getDate() - day;

    if (day_result < 0) {
        day_result += 30
        month_result -= 1
    }

    if (month_result < 0) {
        month_result += 12
        year_result -= 1
    }

    if (year > 2023 || year < 1 ){
        year_input.style.borderColor = 'red';
        year_error.style.display = 'block';
        error_occurred = true;
    }

    else{
        year_input.style.borderColor = ''
        year_error.style.display = 'none'
    }

    if (month > 12 || month < 1){
        month_input.style.borderColor = 'red';
        month_error.style.display = 'block';
        error_occurred = true;
    }

    else{
        month_input.style.borderColor = ''
        month_error.style.display = 'none'
    }

    if (day > 31 || day < 1){
        day_input.style.borderColor = 'red'
        day_error.style.display = 'block'
        error_occurred = true
    }

    else{
        day_input.style.borderColor = ''
        day_error.style.display = 'none'
    }

    if (error_occurred){
        return
    }


    document.getElementById("year_2").innerHTML = year_result;
    document.getElementById("month_2").innerHTML = month_result;
    document.getElementById("day_2").innerHTML = day_result;

}
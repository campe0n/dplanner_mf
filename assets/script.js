// time variables
var currentDay = $("#currentDay");
var currentHour = dayjs().hour();
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));

//Save
$('button').on('click', function(event){
    event.preventDefault();
    $('input[type="text"]').each(function(){
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        })
    })

function renderLastEvent() {
    var nineInput = localStorage.getItem("9");
    var tenInput = localStorage.getItem("10");
    var elevenInput = localStorage.getItem("11");
    var twelveInput = localStorage.getItem("12");
    var oneInput = localStorage.getItem("13");
    var twoInput = localStorage.getItem("14");
    var threeInput = localStorage.getItem("15");
    var fourInput = localStorage.getItem("16");
    var fiveInput = localStorage.getItem("17");
    
    document.getElementById("9").value = nineInput;
    document.getElementById("10").value = tenInput;
    document.getElementById("11").value = elevenInput;
    document.getElementById("12").value = twelveInput;
    document.getElementById("13").value = oneInput;
    document.getElementById("14").value = twoInput;
    document.getElementById("15").value = threeInput;
    document.getElementById("16").value = fourInput;
    document.getElementById("17").value = fiveInput;
}

function colorCode(){
    console.log(currentHour);
    $('input').each(function(){
        var number = 1 + number;
        if (number === currentHour) $('input').attr('present');
    })
}
//call functions(init)
renderLastEvent();
colorCode();
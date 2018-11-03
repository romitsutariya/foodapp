var  balance;
var URL="http://localhost:3000";
$(document).ready(function(){
    fnLoadAvailableBalane();
    setDate();
});

function fnLoadAvailableBalane()
{
    $.get(URL+"/balance", function(data){
        balance=data.amount;
        $("#blnc").html(`Rs.${data.amount}`);
      });
}
function setDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

    today = dd+'-'+mm+'-'+yyyy;                
   $('#date').val(today+"");
}
function sendData()
{
    
    var user = [];
            $.each($("input[name='name']:checked"), function(){            
                user.push($(this).val());
            });
    if(validation_form(user.length))
    {
    $.post(URL,
    {
        amount: $("#amount").val(),
        balance : balance,
        date: $("#date").val(),
        place: $("#place").val(),
        meal: $("#meal").val(),
        user : user
    },
    function(data, status){
        alert("Your request submited succssfuly\n Available Balance - Rs." + data );
        fnLoadAvailableBalane();
        //this is for  clear all fild after insert
        clearFiled();
    });}
    
}

function clearFiled()
{
     $("#amount").val(""),
     $("#place").val(""),
     $("#meal").val("")
     $('#meal option[value="-1"]').attr("selected", "selected");
    
     $( "input[type='checkbox']" ).each(function() {
        $( this ).prop("checked", false);
      });
        

}

function validation_form(user)
{
        amount= $("#amount").val();
        date=$("#date").val();
        place= $("#place").val();
        meal=$("#meal").val();
        if(date=="")
        {
            alert("Please enter date");
            $("#date").focus();
            return false;
        }
        if(amount=="")
        {
            alert("Please enter amount");
            $("#amount").focus();
            return false;
        }
        if(place=="")
        {
            alert("Please enter place");
            $("#place").focus();
            return false;
        }
        if(meal=="-1")
        {
            alert("Please select meal type");
            $("#meal").focus();
            return false;
        }
        if(user<=0)
        {
            alert("Please select one or more name");
            return false;
        }
        return true;
}
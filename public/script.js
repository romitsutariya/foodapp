var  balance;
var URL="ec2-18-224-215-235.us-east-2.compute.amazonaws.com:3000";
$(document).ready(function(){
    
});

<<<<<<< HEAD
=======
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
>>>>>>> b1f6808e4fbfe2bb3461e15f14f27fff9f8a332f

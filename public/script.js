$(document).ready(function(){
    insertDate();
   $("#btn").click(function(){
       if(validation(getData())){
        $.ajax({
        url: "/",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(getData()),
        contentType: "application/json",
        cache: false,
        timeout: 5000,
        complete: function() {
            clearFiled()
        },

        success: function(data) {
          alert(data.message);
          console.log('process sucess');
       },

        error: function() {
        console.log('process error');
        },
      });}
      
   })
});
function insertDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
      } 
     if (mm < 10) {
         mm = '0' + mm;
      } 
    var today = dd + '/' + mm + '/' + yyyy;
    $('#date').val(today);
}
function validation(data){
    if(data.amount=="")
    {
        alert("Plaese Enter Amount!");
        return false;
    }
    else if(data.place=="")
    {
        alert("Plaese Enter Place!");
        return false;
    }
    else if(data.meal=="-1")
    {
        alert("Plaese Enter Meal!");
        return false;
    }
    else if(data.names=="")
    {
        alert("Please Select Geeks");
        return false;
    }
    else if(data.userName=="")
    {
        alert("Please Select UserName");
        return false;
    }
     return true;    
}
function getData()
{
   let data={ 
        amount: $('#amount').val(),
        date: $('#date').val(),
        place: $('#place').val(),
        meal:$('#meal').val(),
        userName:$('#userName').val()
    }
    var names = [];
    $('input[name="name"]:checked').each(function() {
        names.push(this.value);
     });
    names=names.join(",");
    data.names=names;
    return data;
}

function clearFiled()
{
     $("#amount").val(""),
     $("#place").val(""),
     $("#meal").val("")
     userName:$('#userName').val("")
     $('#meal option[value="-1"]').attr("selected", "selected");
    
     $( "input[type='checkbox']" ).each(function() {
        $( this ).prop("checked", false);
      });
        

}
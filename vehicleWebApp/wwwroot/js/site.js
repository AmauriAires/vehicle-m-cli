// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//$.getJSON( "https://127.0.0.1:5003/api/vehicles/c/c/c/c", function( data ){
//  console.log( data );
//});



function ChangecatList(){
    //alert($('#validationCustom01').val());
}

function ChangecatList2(){
    //alert($('#validationCustom01').val());
}
function ChangecatList3(){
    //alert($('#validationCustom01').val());
}
function ChangecatList4(){
    //alert($('#validationCustom01').val());
}


$('#submitBtn').on("click",function() {
    var serviceURL = '/Home/FirstAjax';
    var name = $('#validationCustom01').val();
    var brand = $('#validationCustom02').val();
    var color = $('#validationCustom03').val();
    var year = $('#validationCustom04').val();
    console.log('name:' + name +', ' + 'brand: ' + brand +', ' + 'color: ' + color +', ' + 'year: ' + year);

    $.ajax({
        type: "POST",
        url: serviceURL,
        data: JSON.stringify({name: name}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successFunc,
        error: errorFunc
    });

    function successFunc(data, status) { 
        console.log(data);
        $(".carousel-inner img").each(function(index,ele){
            $(this).attr('src','/images/'+JSON.parse(data).Pictures[index]);
        });
    }

    function errorFunc() {
        alert('error');
    }
}); 

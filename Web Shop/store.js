$(document).ready(function() {

	
    $(".btn-primary").click(function(){

    var name = $(this).parent().find(".card-title").text();
    var price = $(this).parent().find(".card-text").html();

    // var name = $(".card-title").html();
    // var price = $(".card-text").html();

    // $(".name").text("product" + name);
    // $(".price").text("price" + price);

    //alert("Product : " + name + ", Price: " + price);

    $("#container").html($("#container").html() + "<h2>Der Inhalt kommt von jQuery</h2>");

    $(".panel-body").html("<span class = 'name'>" + name + "</span>");
    $(".panel-body").html($(".panel-body").html() + "<span class = 'price'>" + price + "</span>");


    

   
    

});
 
});
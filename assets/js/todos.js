$("#list").on("click", "li", function(){
	$(this).toggleClass("done");
});

$("#list").on("click", ".removeTodo", function(event){
	$(this).closest('li').fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("#todoInput").on('keyup', function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $("#list").append("<li><span class='removeTodo'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val('');
    }
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});
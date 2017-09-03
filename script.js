{
	var text = "";
		function input_elements(elem){
			text = text + elem;
			$(".display").val(text);
		}
		function reset_area(){
			text = "";
			$(".display").val("");
		}
};
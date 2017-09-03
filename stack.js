class CheckStack {
	
	constructor() {
		this.items = [];
	}
	
	push(item) {
		this.items.push(item);
	}
	
	pop() {
		var len_of_list = this.items.length;
			this.items.splice(len_of_list - 1, 1);
	}
	
	isempty() {
		if (!this.items.length) {
			return true;
		} else {
			return false;
		}
	}
}

function parChecker(symbolString) {
	var list_for_check = new CheckStack();
	var balanced = true;
	var index = 0;
	while((index < symbolString.length) && balanced) {
		var symbol = symbolString[index];
		if(symbol == "(") {
			list_for_check.push(symbol)
		} else {
			if(list_for_check.isempty()) {
				balanced = false;
				alert("false1")
			} else {
				list_for_check.pop()
			}
		}
		index = index + 1;
		if(balanced && list_for_check.isempty()) {
			alert(this.items)
			return true;
		} else {
			alert(false)
			return false;
		}
	}
}
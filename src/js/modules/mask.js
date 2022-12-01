const mask = (selector) => {

	let setCursorPosition = (pos, elem)=>{
		elem.focus();

		if (elem.setSelectionRange)
	};

	function createMask(event) {
		let matrix = "+8 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, (a) => {
			return /[_\d]/.test(a) && i < val.length
				? val.charAt(i++)
				: i >= val.length
				? ""
				: a;
		});

		if (event.type === "blur") {
			if (this.value.length == 2) {
				this.value = "";
			}
		} else {
			setCursorPosition(this.value.length, this)
		}
	}
};
export default mask;

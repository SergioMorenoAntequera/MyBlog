

export function placeCaretAtEnd(el) {
    if(!el) return
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

export const stringToHTML = function (str) {

	// If DOMParser is supported, use it
	if (DOMParser) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		return doc.body.innerHTML;
	}

	// Otherwise, fallback to old-school method
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom.innerHTML;

};
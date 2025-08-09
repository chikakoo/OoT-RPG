Array.prototype.shuffle = function()
{
	var i = this.length;
	while (i)
	{
		var j = Math.floor(Math.random() * i);
		var t = this[--i];
		this[i] = this[j];
		this[j] = t;
	}
	return this;
}

dce = function dce(tagName)
{
    return document.createElement(tagName);
};

containsCssClass = function containsCssClass(element, classToCheck)
{
    return element && element.className.split(" ").indexOf(classToCheck) > -1;
};

addCssClass = function addCssClass(element, classToAdd)
{
    if (!containsCssClass(element, classToAdd))
    {
        element.className += " " + classToAdd;
    }
};

removeCssClass = function removeCssClass(element, classToRemove)
{
    if (containsCssClass(element, classToRemove))
    {
        var classNames = element.className.split(" ");
        var index = classNames.indexOf(classToRemove);
        classNames.splice(index, 1);
        element.className = classNames.join(" ");
    }
};

replaceCssClass = function replaceCssClass(element, oldClass, newClass)
{
    removeCssClass(element, oldClass);
    addCssClass(element, newClass);
};

toggleCssClass = function toggleCssClass(element, cssClass)
{
	if (containsCssClass(element, cssClass)) {
		removeCssClass(element, cssClass);
	} else {
		addCssClass(element, cssClass);
	}
};
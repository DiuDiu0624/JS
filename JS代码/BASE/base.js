function $(selector) {
    return new Base(selector);
}



//  var a  = document.getElementsByTagName(selector);
function Base(selector) {
    this.elements = [];
    var s = selector.charAt(0);
    var subs = selector.substring(1);
    switch (s) {
        case '#':
            this.getId(subs);
            break;
        case '.':
            this.getClass(subs);
            break;
        default:
            this.getTagName(selector);
            break;

    }
}

Base.prototype.getId = function (id) {
    var o = document.getElementById(id);
    this.elements.push(o);
};

Base.prototype.getClass = function (className) {
    var os = document.getElementsByClassName(className);
    for (var i = 0; i < os.length; i++) {
        this.elements.push(os[i]);

    }
};
Base.prototype.getTagName = function (tagName) {
    var os = document.getElementsByTagName(tagName);
    for (var i = 0; i < os.length; i++) {
        this.elements.push(os[i]);

    }
};

Base.prototype.css = function (cssName, cssValue) {
    if (cssValue === undefined) {
        if (typeof cssName === "object") {
            for (var i = 0; i < this.elements.length; i++) {
                for (var k in cssName) {
                    this.elements[i].style[k] = cssName[k];
                }             
            }
        }
    }
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style[cssName] = cssValue;
    }
    return this;
}
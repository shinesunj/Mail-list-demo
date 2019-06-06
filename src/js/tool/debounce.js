function debounce(handler, delay) {
    var timer = null;
    return function () {
        var _arg = arguments;
        var self = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handler.apply(self, _arg);
        }, delay)
    }
}
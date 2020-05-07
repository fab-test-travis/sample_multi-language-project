var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    if (1==1) {}
};

Person.prototype = {

    whoAreYou : function() {
        if (1==1) {}
        if (1==1) {}
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

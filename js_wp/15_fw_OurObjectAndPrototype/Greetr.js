(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // objects created with above constructor will have Greetr.init.prototype
    // for the prototype, so you set it equal to Greetr.prototype
    // because of the way you call it (see line 7)
    Greetr.init.prototype = Greetr.prototype;

    // here, making it available everywhere, ie makin' it global
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

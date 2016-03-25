var app = app || {};

(function(eventsSystem) {
    function Party(options) {
        eventsSystem._Event.call(this, options);
        this._isCatered = this.setIsCatered(options.isCatered);
        this._isBirthday = this.setIsBirthday(options.isBirthday);
        this._organiser = this.setOrganiser(options.organiser);
    }

    Party.extends(eventsSystem._Event);

    Party.prototype.getIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function(isCatered) {
        this._isCatered = isCatered;
    };

    Party.prototype.getIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function(isBirthday) {
        this._isBirthday = isBirthday;
    };

    Party.prototype.getOrganiser = function() {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function(organiser) {
        if (!(organiser instanceof eventsSystem.employee)) {
            throw new Error('Invalid organiser!');
        }

        this._organiser = organiser;
    };

    eventsSystem.party = function(options) {
        return new Party(options);
    };


})(app);
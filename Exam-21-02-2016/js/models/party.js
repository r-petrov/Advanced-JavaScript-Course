var app = app || {};

(function(eventsSystem) {
    function Party(options) {
        eventsSystem._Event.call(this, options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(eventsSystem._Event);

    Party.prototype.checkIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function(isCatered) {
        if(!(typeof(isCatered) === "boolean")){
            throw new Error('The value should be only "true" or "false"');
        }

        this._isCatered = isCatered;
    };

    Party.prototype.checkIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function(isBirthday) {
        if(!(typeof(isBirthday) === "boolean")){
            throw new Error('The value should be only "true" or "false"');
        }

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

    eventsSystem.party = Party;
})(app);
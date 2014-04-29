function ImmutableDate(year, month, day, hour, minute, second, millisecond) {
  if(arguments.length === 0) {
    this._date = new Date;
  } else if (arguments.length === 1) {
    this._date = new Date(year);
  } else {
    this._date = new Date(year, month, day, hour, minute, second, millisecond);
  }
}

Object.getOwnPropertyNames(Date.prototype).forEach(function(p) {
  if(!/^set/.test(p)) {
    ImmutableDate.prototype[p] = function getter() {
       return this._date[p].apply(this._date,arguments);
    }
  } else {
    ImmutableDate.prototype[p] = function setter() {
      var nd = new Date(+this._date);
      nd[p].apply(nd,arguments);
      return nd;
    }
  }
});

module.exports = ImmutableDate;

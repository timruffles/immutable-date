function ImmutableDate(year, month, day, hour, minute, second, millisecond) {
  switch(arguments.length) {
  case 0:
    this._date = new Date;
    break;
  case 1:
    this._date = new Date(year);
    break;
  case 2:
    this._date = new Date(year, month);
    break;
  case 3:
    this._date = new Date(year, month, day);
    break;
  case 4:
    this._date = new Date(year, month, day, hour);
    break;
  case 5:
    this._date = new Date(year, month, day, hour, minute);
    break;
  case 6:
    this._date = new Date(year, month, day, hour, minute, second);
    break;
  case 7:
    this._date = new Date(year, month, day, hour, minute, second, millisecond);
  }
}

Object.getOwnPropertyNames(Date.prototype).forEach(function(p) {
  if(p == "constructor") {
    return;
  } else if(!/^set/.test(p)) {
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

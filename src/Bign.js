function parseToIntArray(stringValue) {
    if(stringValue.indexOf('-') === 0)
    {
        this._isNegative = true;
        stringValue = stringValue.substring(1);
    }
    
    this._value = stringValue
        .split('')
        .reverse()
        .map(ch => parseInt(ch))
        .reduce((prev, curr) => prev.concat(curr), []);
}

function BigN(val) {
    this._value = [];
    this._isNegative = false;

    if (typeof val === 'undefined' || val === null) {
        return BigN.prototype._zero;
    }
    
    parseToIntArray.call(this, val.toString()); 
    this.value = Number(val);
}

BigN.prototype._zero = new BigN(0);

BigN.zero = function() {
    return BigN.prototype._zero;
}; 

BigN.prototype.equals = function(other) {
    if(this._value.length !== other._value.length)
        return false;
    
    if(this._isNegative !== other._isNegative)
        return false;
    
    for(let i=0; i<this._value.length; i++)
    {
       if(this._value[i] !== other._value[i]) 
           return false;
    }
    return true;
};

BigN.prototype.toString = function() {
    const stringValue = this._value.reverse().join(''); 
    if(this._isNegative) {
        return `-${stringValue}`;
    }
    return stringValue;
};

// BigN.prototype._convertToArray = function(strValue) {
//    this._value = strValue 
//         .split('')
//         .reverse()
//         .map(ch => parseInt(ch))
//         .reduce((prev, curr) => prev.concat(curr), []); 
// };



module.exports = BigN;


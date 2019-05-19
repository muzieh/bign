
module.exports = {
    zero: {
        toString: () => '0'
    },
    create: function(val) {
        if(!val)
            return '0';
        
        return val.toString();
    },
    equals: function(other) {
        return this.value === other.value;
    }
};
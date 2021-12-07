function sum(n1, n2) {
    if( n1 < 0 || n2 < 0 ){
        return NaN
    }
    return n1 + n2
}

module.exports = sum

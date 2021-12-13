import _ from 'lodash'

let info = {
  boy : {
    isGood : true,
    isPretty : false,
  }
}

let clone = _.cloneDeep(info);

clone.boy.isGood = false

console.log(info.boy.isGood)
console.log(clone.boy.isGood)

import intersectionBy from './intersectionBy'
import xorBy from './xorBy'

function rightXorBy(leftList, rightList, key) {
  var intersection = intersectionBy(leftList, rightList, key);
  return xorBy(rightList, intersection, key);
}

export default rightXorBy

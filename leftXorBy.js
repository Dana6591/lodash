import intersectionBy from './intersectionBy'
import xorBy from './xorBy'

function leftXorBy(leftList, rightList, key) {
  var intersection = intersectionBy(leftList, rightList, key);
  return xorBy(leftList, intersection, key);
}

export default leftXorBy

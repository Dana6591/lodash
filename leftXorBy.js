import intersectionBy from './intersectionBy'
import xorBy from './xorBy'

function leftXorBy(leftList, rightList, fn) {
  var intersection = intersectionBy(leftList, rightList, fn);
  return xorBy(leftList, intersection, fn);
}

export default leftXorBy

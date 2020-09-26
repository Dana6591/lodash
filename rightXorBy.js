import intersectionBy from './intersectionBy'
import xorBy from './xorBy'

function rightXorBy(leftList, rightList, fn) {
  var intersection = intersectionBy(leftList, rightList, fn);
  return xorBy(rightList, intersection, fn);
}

export default rightXorBy

function flattenTree(list, level = 1, parent = null, defaultExpand = true, visible = true) {
  var rs = [];

  function inner_flatten(list, level, parent, defaultExpand) {
    if (!list) return;

    list.forEach((item, i) => {
      item.level = level;
      item.parent = parent;
      item.visible = visible;
      item.expand = i === 0 ? true : defaultExpand;
      rs.push(item);
      inner_flatten(item.children, level + 1, item, defaultExpand);
    });
  }

  inner_flatten(list, level, parent, defaultExpand);

  return rs;
}
export default flattenTree

export const getParents = () => {
  if (!localStorage.getItem("users")) return;
  let parentArr = [];
  JSON.parse(localStorage.getItem("users")).flatMap(function setParent(el) {
    parentArr.push(el.name);
    el.children?.flatMap(setParent);
  });
  return parentArr;
};
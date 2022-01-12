/* exported getElementsByClassName */

const getElementsByClassName = (tarClass) => {
  let out = []
  let children = document.children

  function getElements(nodes) {
    for (let i=0; i< nodes.length; i++) {
      if (nodes[i].classList.contains(tarClass))  {
        out.push(nodes[i])
      }
      if (nodes[i].children.length) {
        getElements(nodes[i].children)
      }
    }
  }
  getElements(children)
  return out
};

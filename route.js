const arr = [
  {
    title: "EYES ON YOU",
    href: "first",
  },
  {
    title:"LET IT BE",
    href:"second"
  }
];

const list = document.querySelector(".list");
const fragment = new DocumentFragment();

function createLink(title, href) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  // list.classList.add("list-item")
  link.classList.add("list-item");
  const linkText = document.createTextNode(title);
  link.appendChild(linkText);
  link.title = title;
  link.href = `/${href}/index.html`;
  //   link.href = `/src/${title}/index.html`;
  item.appendChild(link);
  fragment.appendChild(item);
}
for (let i = 0; i < arr.length; i++) {
  createLink(arr[i].title, arr[i].href);
}
list.append(fragment);

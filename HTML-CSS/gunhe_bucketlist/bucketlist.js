const mainList = document.querySelector(".main-list");
const form = document.querySelector("form");
const input = document.querySelector("form input");

let bucketlist = [
  {
    id: Date.now(),
    content: "Travel all around the world",
  },
  {
    id: Date.now(),
    content: "Learn a new language",
  },
  {
    id: Date.now(),
    content: "Try a profession in a different field",
  },
  {
    id: Date.now(),
    content: "Achieve your ideal weight",
  },
  {
    id: Date.now(),
    content: "Run a marathon",
  },
];

function saveBucketlist() {
  localStorage.setItem("bucketlist", JSON.stringify(bucketlist));
}

function paintBucketlist(bucketlistObj) {
  const p = document.createElement("p");
  p.innerText = bucketlistObj.content;
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.appendChild(p);
  mainList.appendChild(listItem);
  p.addEventListener("click", selectBucketlist);
}

function bucketlistSubmit(e) {
  e.preventDefault();
  const newBucketlist = input.value;
  input.value = "";
  const bucketlistObj = {
    id: Date.now(),
    content: newBucketlist,
  };
  bucketlist.push(bucketlistObj);
  paintBucketlist(bucketlistObj);
  saveBucketlist();
}
function selectBucketlist(e) {
  console.dir(e.target);

  if (e.target.parentNode.classList.contains("select")) {
    e.target.parentNode.classList.remove("select");
  } else {
    e.target.parentNode.classList.add("select");
  }
}
form.addEventListener("submit", bucketlistSubmit);

const savedBucketlist = localStorage.getItem("bucketlist");

if (savedBucketlist !== null) {
  const parsedBucketlist = JSON.parse(savedBucketlist);
  bucketlist = parsedBucketlist;
  parsedBucketlist.forEach(paintBucketlist);
}

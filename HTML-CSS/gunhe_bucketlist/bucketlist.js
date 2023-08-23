const mainList = document.querySelector(".main-list");
const form = document.querySelector("form");
const input = document.querySelector("form input");

let bucketlist = [
  {
    id: 1,
    content: "Travel all around the world",
  },
  {
    id: 2,
    content: "Learn a new language",
  },
  {
    id: 3,
    content: "Try a profession in a different field",
  },
  {
    id: 4,
    content: "Achieve your ideal weight",
  },
  {
    id: 5,
    content: "Run a marathon",
  },
];
const arr = [];
function saveBucketlist() {
  localStorage.setItem("bucketlist", JSON.stringify(bucketlist));
}

function paintBucketlist(bucketlistObj) {
  const p = document.createElement("p");
  p.innerText = bucketlistObj.content;

  const listItem = document.createElement("li");
  listItem.id = bucketlistObj.id;

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
  if (e.target.parentNode.classList.contains("select")) {
    arr.splice(arr.indexOf(e.target.parentNode.id), 1);
    e.target.parentNode.classList.remove("select");
    console.log(arr);
  } else {
    arr.push(e.target.parentNode.id);
    e.target.parentNode.classList.add("select");

    console.log(arr);
  }
}

form.addEventListener("submit", bucketlistSubmit);

const savedBucketlist = localStorage.getItem("bucketlist");

if (savedBucketlist !== null) {
  const parsedBucketlist = JSON.parse(savedBucketlist);
  bucketlist = parsedBucketlist;
  bucketlist.forEach(paintBucketlist);
}
const deleteBtn = document.querySelector(".deleteBtn");
const listItem = document.querySelectorAll(".list-item");
console.log(listItem);
deleteBtn.addEventListener("click", () => {
  listItem.forEach((item) => {
    if (item.classList.contains("select")) {
      item.remove();
    }
    bucketlist = bucketlist.filter((item) => !arr.includes(String(item.id)));
    saveBucketlist();
  });
});

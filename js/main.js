const messageList = document.getElementById("hpnyMessageList");

const API_URL = "http://43.201.103.199";

const getPosting = (api) => {
  const url = api + "/posts";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      posts = data.data.posts;
      posts.forEach((post) => {
        handlePosting(post);
      });
    });
};

const handlePosting = (post) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const title = document.createElement("h4");
  const content = document.createElement("p");

  img.src = post.image;
  title.innerText = post.title;
  content.innerText = post.content;
  li.appendChild(img);
  li.appendChild(title);
  li.appendChild(content);
  messageList.appendChild(li);
};

getPosting(API_URL);

let posts = [
    { name: "John", text: "Hello, world!" },
    { name: "Jane", text: "Hello, John!" }
  ];
  
  function addPost(name, text) {
    posts.push({ name: name, text: text });
  }
  
  function getPosts() {
    return posts;
  }
  
  function removePost(index) {
    posts.splice(index, 1);
  }
  
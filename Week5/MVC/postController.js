function render(posts) {
    let container = $("#postContainer");
    container.empty(); // Clear the post container first
    
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      let postDiv = $("<div>").addClass("post").attr("data-index", i); // Add a data attribute for the index
      postDiv.append($("<h2>").text(post.name));
      postDiv.append($("<p>").text(post.text));
      container.append(postDiv);
    }
  }
  
  function getFormData() {
    let name = $("#name").val();
    let text = $("#text").val();
    return { name, text };
  }
  
  function postClickHandler() {
    let index = $(this).data("index");
    removePost(index);
    renderPosts();
  }
  
  $("#submit").click(function() {
    let { name, text } = getFormData();
    
    if (name.trim() === '' || text.trim() === '') {
      alert('Please fill in all fields');
    } else {
      addPost(name, text);
      renderPosts();
      clearFormData();
    }
  });
  
  function renderPosts() {
    let posts = getPosts();
    render(posts);
  }

  $("#postContainer").on("click", ".post", postClickHandler);
  
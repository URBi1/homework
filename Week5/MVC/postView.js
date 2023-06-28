function render(posts) {
    let container = $("#postContainer");
    container.empty(); 
    
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      let postDiv = $("<div>").addClass("post").attr("data-index", i); // Add a data attribute for the index
      postDiv.append($("<h2>").text(post.name));
      postDiv.append($("<p>").text(post.text));
      postDiv.click(postClickHandler); 
      container.append(postDiv);
    }
  }
  
  function getFormData() {
    let name = $("#name").val();
    let text = $("#text").val();
    return { name, text };
  }
  
function postClickHandler() {
    let index = $(this).data("index");
    removePost(index);
    renderPosts();
  }
  
  $("#submit").click(function() {
    let { name, text } = getFormData();
    
    if (name.trim() === '' || text.trim() === '') {
      alert('Please fill all fields');
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

  function clearFormData() {
    $("#name").val('');
    $("#text").val('');
  }
  

  renderPosts();
  
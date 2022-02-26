var newForm = document.querySelector('.new-post-form');
var createPost =  document.querySelector('.create-post');

function newFormDisplay () {
 newForm.style.display = "block";
 createPost.style.display = "none";


}

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  

  document.querySelector('.create-post').addEventListener('click', newFormDisplay);

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);


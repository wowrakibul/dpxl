document.getElementById('create-post-btn').addEventListener('click', function () {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <div class="editor">
      <h2>Create a New Post</h2>
      <input type="text" id="post-title" placeholder="Post Title" />
      <textarea id="post-content" placeholder="Write your content here..."></textarea>
      <button id="save-post-btn">Save Post</button>
    </div>
  `;

  document.getElementById('save-post-btn').addEventListener('click', function () {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const post = {
      title,
      content,
      date: new Date().toISOString(),
      isPublic: false,
    };
    savePost(post);
  });
});

function savePost(post) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post saved successfully!');
}

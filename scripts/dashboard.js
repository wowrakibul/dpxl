document.getElementById('dashboard-btn').addEventListener('click', function () {
  const mainContent = document.getElementById('main-content');
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  let dashboardHtml = `<h2>Dashboard</h2><table class="dashboard-table"><tr><th>Title</th><th>Date</th><th>Actions</th></tr>`;

  posts.forEach((post, index) => {
    dashboardHtml += `
      <tr>
        <td>${post.title}</td>
        <td>${new Date(post.date).toLocaleString()}</td>
        <td>
          <button onclick="editPost(${index})">Edit</button>
          <button onclick="togglePublic(${index})">${post.isPublic ? 'Unpublish' : 'Publish'}</button>
          <button onclick="deletePost(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  dashboardHtml += '</table>';
  mainContent.innerHTML = dashboardHtml;
});

function editPost(index) {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const post = posts[index];
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <div class="editor">
      <h2>Edit Post</h2>
      <input type="text" id="post-title" value="${post.title}" />
      <textarea id="post-content">${post.content}</textarea>
      <button id="update-post-btn">Update Post</button>
    </div>
  `;

  document.getElementById('update-post-btn').addEventListener('click', function () {
    post.title = document.getElementById('post-title').value;
    post.content = document.getElementById('post-content').value;
    posts[index] = post;
    localStorage.setItem('posts', JSON.stringify(posts));
    alert('Post updated successfully!');
  });
}

function togglePublic(index) {
  const posts = JSON.parse(localStorage.getItem('posts'));
  posts[index].isPublic = !posts[index].isPublic;
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post visibility updated!');
}

function deletePost(index) {
  let posts = JSON.parse(localStorage.getItem('posts'));
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  alert('Post deleted!');
}

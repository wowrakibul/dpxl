// This would generate public-facing HTML for public posts
function generatePublicPage(post) {
  return `
    <html>
      <head>
        <title>${post.title}</title>
        <link rel="stylesheet" href="../styles/styles.css">
      </head>
      <body>
        <article>
          <h1>${post.title}</h1>
          <p>${new Date(post.date).toLocaleString()}</p>
          <div>${post.content}</div>
        </article>
      </body>
    </html>
  `;
}

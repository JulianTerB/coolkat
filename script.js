document.addEventListener('DOMContentLoaded', () => {
  const postList = document.getElementById('post-list');
  const postContent = document.getElementById('post-content');

  postList.addEventListener('click', async (e) => {
    if (e.target && e.target.matches('li[data-post]')) {
      const postFile = e.target.getAttribute('data-post');
      try {
        const response = await fetch(postFile);
        if (!response.ok) throw new Error('Netwerkfout');
        const markdown = await response.text();
        postContent.innerHTML = marked.parse(markdown);
      } catch (error) {
        postContent.innerHTML = 'Fout bij het laden van de post.';
        console.error(error);
      }
    }
  });
});

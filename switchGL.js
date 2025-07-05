document.addEventListener('DOMContentLoaded', function() {
  const gridBtn = document.getElementById('gridView');
  const listBtn = document.getElementById('listView');
  const box = document.querySelector('.portfolio-box');

  gridBtn.addEventListener('click', function() {
    box.classList.remove('list-view');
  });

  listBtn.addEventListener('click', function() {
    box.classList.add('list-view');
  });
});
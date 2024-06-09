var pages = new Array('title1', 'title2', 'title3', 'title4');

function klikMenu() {
  document.getElementsByClassName('inside_container')[0].classList.toggle('buka_menu');
}

function movetopage(page) {
  var inside_container = document.getElementsByClassName('inside_container')[0];
  var sections = document.getElementsByClassName('inside_title');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  inside_container.classList.remove('buka_menu', 'page-title1', 'page-title2');
  inside_container.classList.add('page-' + pages[page]);
}
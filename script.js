const createButton = document.querySelector('.create-btn');
const createMenu = document.getElementById('create-menu');
const createWrapper = document.querySelector('.create-menu-wrapper');

if (createButton && createMenu) {
  createButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isExpanded = createButton.getAttribute('aria-expanded') === 'true';
    createButton.setAttribute('aria-expanded', String(!isExpanded));
    createMenu.hidden = isExpanded;
  });
}

document.addEventListener('click', (event) => {
  if (!createWrapper?.contains(event.target)) {
    if (createButton) {
      createButton.setAttribute('aria-expanded', 'false');
    }
    if (createMenu) {
      createMenu.hidden = true;
    }
  }
});

document.querySelectorAll('.create-menu button').forEach((option) => {
  option.addEventListener('click', (event) => {
    event.stopPropagation();
    const selectedText = option.textContent.trim();
    if (createButton) {
      createButton.textContent = '＋ ' + selectedText;
      createButton.setAttribute('aria-expanded', 'false');
    }
    if (createMenu) {
      createMenu.hidden = true;
    }
  });
});

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});

const profileButton = document.querySelector('.profile-avatar');
if (profileButton) {
  profileButton.addEventListener('click', () => {
    window.location.href = 'profile.html';
  });
}

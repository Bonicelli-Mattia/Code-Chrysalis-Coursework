window.onload = () => {

  // this is a very simple check to see if there's a username stored
  if (!localStorage.getItem('username')) {
    // prompt for one from user if not
    window.username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  } else {
    window.username = localStorage.getItem('username');
  }

  const containerEl = document.querySelector('#newsfeed');

  // this just makes things appear  
  let index = bacefook.newsfeed.length - 1;
  while (index >= 0) {
    const post = bacefook.newsfeed[index];

    const friendEl = document.createElement('div');
    friendEl.className = 'friend';
    friendEl.innerText = post.friend;

    const postEl = document.createElement('div');
    postEl.innerText = post.text;
    postEl.append(friendEl);
    containerEl.append(postEl);

    index -= 1;
  }
};
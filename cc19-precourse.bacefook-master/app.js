window.onload = () => {

  // changes moment.js display for 'a few seconds ago'
  // merrily lifted from moment.js github's issue page
  moment.updateLocale('en', {
    relativeTime : {
      past: function(input) {
        return input === ''
          ? input
          : input + ' ago'
      },
      s  : '%d seconds',
    }
  })

  // memes
  const tts = window.speechSynthesis
  let utter = ''
  let help = false
  let message = ''
  let msg = document.getElementById('message')
  const helpButton = document.getElementById('helpBtn')
  helpButton.addEventListener('click', function(){
    helpButton.remove()
    help = true
    document.getElementById('veryUsefulAssistant').style.display = 'block'
    msg.style.display = 'block'
    message = `Hello ${username}, my name is Clippy, your personal faceb...uhm...Bacefook assistant, how may I help you today?`
    msg.innerText = message
    utter = new SpeechSynthesisUtterance(message)
    tts.speak(utter)
  })

  if (!localStorage.getItem('username')) {
    window.username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  } else {
    window.username = localStorage.getItem('username');
  }

  // puts the username in a div
  const userName = document.createElement('div')
  userName.innerText = `Posting as ${window.username}`
  userName.id = 'userName'

  //makes a button to publish stuff
  const publishButton = document.createElement('button')
  publishButton.innerText = 'Publish'
  publishButton.id = 'publishButton'

  const userContainer = document.querySelector('#userArea')
  userContainer.append(userName)
  userContainer.append(publishButton)
  
  // makes the button publish stuff
  publishButton.addEventListener('click', function(){
    let val = document.getElementById('writePost').value

    let outObj = {
      friend: window.username,
      text: val,
      feeling: 'hate for clippy',
      image: 'images/placeholder.png',
      timestamp: new Date()
    }
    bacefook.newsfeed.unshift(outObj)
    feedGen()
    // memes
    if (help) {
      tts.cancel()
      message = 'WOW! That was a very cool post!'
      msg.innerText = message
      utter = new SpeechSynthesisUtterance(message)
      tts.speak(utter)
    }
  })

  const containerEl = document.querySelector('#newsfeed');

  // feedGen's rework maintains the basic original html creation but changes loop behaviour.
  // Once a loop is finished it adds a marker at the beginning of the newsfeed array.
  // Since the array is used by the post generator the marker is used to determine
  //   what was the last element display on the webpage by checking it at the start.
  const feedGen = () => {
    timeUpdate()

    let index = bacefook.newsfeed.length - 1; 

    if (bacefook.newsfeed.includes('check')){
      index = bacefook.newsfeed.indexOf('check')
      if (index != 0) {
        bacefook.newsfeed.splice(index, 1)
      }
    }

    while (index >= 1) {
          
      const post = bacefook.newsfeed[index];
  
      const timeEl = document.createElement('span')
      timeEl.className = 'timestamp'
      // custom properties
      timeEl.originalDate = post.timestamp
      timeEl.originalFeel = post.feeling

      const authorEl = document.createElement('span')
      authorEl.className = 'author'
      authorEl.innerText = `by ${post.friend}`
        
      const postEl = document.createElement('div');
      postEl.className = 'post'
      postEl.innerText = post.text

      const imageEl = document.createElement('img')
      imageEl.src = post.image
      
      containerEl.prepend(postEl);
      postEl.append(imageEl)
      containerEl.prepend(timeEl);
      containerEl.prepend(authorEl);

      // checks number of posts and deletes older ones (each post creates 3 'layer 1' elements)
      const postCount = document.getElementById("newsfeed").childElementCount / 3
      if (postCount > 30) {
        feedCull(postCount - 30)
      }

      index --;

      // end of loop check
      if (index === 0){
        bacefook.newsfeed.unshift('check')
        timeUpdate()
      }
    }
  }

  // helper function to update post times
  const timeUpdate = () => {
   const timestamps = document.querySelectorAll('.timestamp')
   let oldTime = ''
   let newTime = ''
   let oldFeel = ''
     for (let i=0; i<timestamps.length; i++ ){
     oldTime = timestamps[i].originalDate
     oldFeel = timestamps[i].originalFeel
     newTime = moment(oldTime, 'hh:mm:ss').fromNow()
     timestamps[i].innerText = `posted ${newTime} feeling ${oldFeel} `
   }
  }
  
  // helper function to keep the feed clean
  const feedCull = (numElem) => {
    if (numElem >= 0) {
      containerEl.removeChild(containerEl.lastChild)
      feedCull(numElem - 1)
    }
  }
  feedGen()
  setInterval(feedGen, 1000) 
}
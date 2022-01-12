(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friends.meowze = [];
  bacefook.friends.hana = [];
  bacefook.friends.kani = [];
  bacefook.friends.yan = [];
  window.friends = Object.keys(bacefook.friends);

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = ['totally just', 'just', 'completely', 'waaaaah! i', 'i just', 'a salaryman', 'a salaryman', 'yesterday I', 'a ninja', 'my boss'];
  const verbs = ['ate', 'drank', 'threw up in', 'refactored', 'iterated on', 'thought about', 'threw up on', 'saw', 'walked to', 'got lost in', 'walked into', 'pooped in', 'peed in', 'googled', 'drove', 'ran to', 'worked on', 'slept on', 'slept in'];
  const fillers = ['my', 'your', 'his', 'her', 'my favorite', 'a beautiful', 'a delicious', 'that', 'this', 'an interesting', '', 'the best', 'the greatest', 'a delightful'];
  const nouns = ['code chrysalis', 'restaurant', 'omakase', 'hitomedia', 'family mart', 'private jet', 'mama', 'lawsons', 'conbini', 'whisky', 'onigiri', 'tesla', 'food', 'house', 'toilet', 'tokyo', 'city', 'iphone', 'google', 'unicorn', 'mess', 'pirate ship', 'ninja'];
  const hashtags = ['#codechrysalis', '#techlife', '#startups', '#tokyo', '#japan', '#interesting', '', '#til', '#wtf', '#tgifriday', '#hashtags', '#japanlife', '#oops'];
  const feelings = ['happy', 'smug', 'lovestruck', 'gross', 'scared', 'shitty', 'angry', 'frustrated', 'excited', '']
  const images = ['images/agumon.png', 'images/digiBirdThing.png', 'images/digiElectricalType.png', 'images/digiSealThing.png', 'images/gabumon.png', 'images/gatomon.png', 'images/palmon.png', 'images/patamon.png'];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(hashtags)
    ].join(' ');
  };

  const generatePostObj = () => {
    return {
      friend: getRandomElement(friends),
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      timestamp: new Date(),
    };
  };

  const addPost = obj => {
    const friend = obj.friend;
    bacefook.friends[friend].unshift(obj);
    bacefook.newsfeed.unshift(obj);
  };

  const createPost = () => {
    const newPost = generatePostObj();
    addPost(newPost);
  };

  for (let i = 0; i < 10; i++) {
    createPost();
  }

  const scheduler = () => {
    createPost();
    setTimeout(scheduler, Math.random() * 5000);
  };

  scheduler();
})();
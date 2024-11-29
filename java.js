const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!"
  ];
  
  const jokeBtn = document.getElementById('jokeBtn');
  const jokeDisplay = document.getElementById('joke');
  
  jokeBtn.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.textContent = randomJoke;
  });
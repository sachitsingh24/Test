// App.js

import React, { useState, useEffect } from 'react';
import './App.css'; // Include your CSS framework here
import ImageCarousel from './components/ImageCarousel';
import NextPair from './components/NextPair';
const imagePairs = [
  { actual: '1-correct.png', fake: '1-fake.png' },
  { actual: '2-correct.png', fake: '2-fake.png' },
  { actual: '3-correct.png', fake: '3-fake.png' },
  { actual: '4-correct.png', fake: '4-fake.png' },
  { actual: '5-correct.png', fake: '5-fake.png' },
  { actual: '6-correct.png', fake: '6-fake.png' },
  { actual: '7-correct.png', fake: '7-fake.png' },
  { actual: '8-correct.png', fake: '8-fake.png' },
  { actual: '9-correct.png', fake: '9-fake.png' },
  { actual: '10-correct.png', fake: '10-fake.png' },

  // Add more image pairs as needed
];

const App = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(15);
  const [score, setScore] = useState(0);
  const [isShuffled, setShuffled] = useState(false);
  const [feedback, setFeedback] = useState('');
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        handleNextPair();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleImageClick = (selectedImage) => {
    let isCorrect = false;
    if (selectedImage === 'fake') {
      setScore((prevScore) => prevScore + 1);
      isCorrect = true;
    }
    setFeedback(isCorrect ? 'Correct! Well done!' : 'Oops! That was the actual site.');

    // Delay the next pair for a moment to display feedback
    setTimeout(() => {
      setFeedback('');
      handleNextPair();
    }, 2000);
  };

  const handleNextPair = () => {
    if (currentPairIndex < imagePairs.length - 1) {
      setCurrentPairIndex((prevIndex) => prevIndex + 1);
      setRemainingTime(15);
    } else {
      // End of the game
      alert(`Game Over! Your score is ${score}/10`);
      // You can implement other end-game logic here
    }
  };
  const handleReset = () => {
    setScore(0);
    setRemainingTime(15);
    setCurrentPairIndex(0);
  }
  const shufflePairs = () => {
    // Shuffle image pairs
    for (let i = imagePairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagePairs[i], imagePairs[j]] = [imagePairs[j], imagePairs[i]];
    }
  };

  useEffect(() => {
    setShuffled(true);
    shufflePairs();
  }, []); // Run only once on component mount
  function getImageUrl(name) {
    return new URL(`${name}`, import.meta.url).href
  }
  return (
    <div className="App">
      {isShuffled && <div>
        
        <ImageCarousel actual={getImageUrl(`./assets/${imagePairs[currentPairIndex].actual}`)} fake={getImageUrl(`./assets/${imagePairs[currentPairIndex].fake}`)} handleImageClick={handleImageClick} remainingTime={remainingTime} />
        {feedback && <p>{feedback}</p>}
        <NextPair handleNextPair={handleNextPair} handleReset={handleReset} />
      </div>}
    </div>
  );
};

export default App;

import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import catGif from './assets/cat.gif';
import happyCatsGif from './assets/happy-cats.gif';

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noClicked, setNoClicked] = useState(0);
  const noMessages = [
    "No? 😢",
    "Are you sure?",
    "Really sure???",
    "Pleasee",
    "Pookie Pleaseee",
    "Just think about it",
    "If you say no, I will be really sad",
  ];

  const handleNoClick = () => {
    setNoClicked(noClicked + 1);
    setYesSize((prev) => prev * 1.1); // Grow the Yes button slightly
  };

  return (
    <div className="container">
      <div className="content">
        {!yesClicked ? (
          <>
            <motion.img
              src={catGif} // Using the imported GIF from assets folder
              alt="Cute Cat"
              className="cat"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <h1>Will you be my Valentine? 💖</h1>
            <div className="buttons">
              <motion.button
                style={{ transform: `scale(${yesSize})` }}
                onClick={() => setYesClicked(true)}
                className="yes"
              >
                Yes 💘
              </motion.button>
              <motion.button
                onClick={handleNoClick}
                className="no"
                style={{
                  fontSize: noClicked >= 6 ? "2rem" : "1.2rem", // Adjust size after several clicks
                }}
              >
                {noClicked < 6 ? noMessages[noClicked] : "I'm really sad 😢"}
              </motion.button>
            </div>
          </>
        ) : (
          <div className="happy-cats">
            {/* Happy Cats GIF */}
            <img src={happyCatsGif} alt="Happy Cats" />
            <h2>Yay! We are together now! 🥰💖</h2>
          </div>
        )}
      </div>
    </div>
  );
}

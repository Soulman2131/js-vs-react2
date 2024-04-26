import React, { useState } from "react";

const tasks = [
  "Nettoyer le sol 👨🏻",
  "Ranger la vaisselle 👨🏻‍🦰",
  "Vider la poubelle 👩🏻‍🦰",
];

function App() {
  const [task, setTask] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //
  const handleNext = () => {
    if (task < 3) setTask((t) => t + 1);
  };

  const handlePrevious = () => {
    if (task > 1) setTask((t) => t - 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="container">
          <h1>Les tâches à faire</h1>
          <header>
            <div className={task >= 1 ? "active" : ""}>1</div>
            <div className={task >= 2 ? "active" : ""}>2</div>
            <div className={task >= 3 ? "active" : ""}>3</div>
          </header>
          <main>
            <p className="message">{` Tâche n° ${task} : ${
              tasks[task - 1]
            } `}</p>
          </main>
          <footer>
            <button onClick={handlePrevious} className="previous">
              Précédent
            </button>
            <button onClick={handleNext} className="next">
              Suivant
            </button>
          </footer>
        </div>
      )}
      ^
    </>
  );
}

export default App;

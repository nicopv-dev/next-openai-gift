import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Results({ status, results }) {
  const [isCursorActive, setIsCursorActive] = useState(true);

  const handleDone = () => {
    setIsCursorActive(false);
  };

  return (
    <p className="text-white">
      <Typewriter
        words={results}
        cursor={isCursorActive}
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={10}
        delaySpeed={1000}
        onLoopDone={handleDone}
      />
    </p>
  );
}

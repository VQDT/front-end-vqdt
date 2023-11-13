import { useEffect, useState } from "react";
import Card from "./Card";

interface StopWatchProps {
  milliseconds: number;
}

function Stopwatch({ milliseconds }: StopWatchProps) {
  const [ time , setTime ] = useState<number>(milliseconds);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
    
    
    const formatTime = (milliseconds: number): string => {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
  
      const remainingSeconds = seconds % 60;
      const remainingMinutes = minutes % 60;
  
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(remainingMinutes).padStart(2, '0');
      const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    console.log("componente renderizado")
  
    return(
      <Card.Container>
          <Card.Title text="Tempo Restante" />
          <p className="text-Midnight text-4xl text-right">
            {formatTime(time)}
          </p>
      </Card.Container>
    );
}


export default Stopwatch;
import { useEffect, useState } from 'react';

interface CountdownProps {
  availableTime: number;
}

function Countdown({ availableTime }: CountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(availableTime * 3600); // Convert hours to seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);


    return () => clearInterval(timer);
  }, [timeRemaining]);

  const hours = String(Math.floor(timeRemaining / 3600));
  const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeRemaining % 60).padStart(2, '0');


  return (
    
    <section className="bg-white w-full rounded-xl p-5 flex justify-between align-middle shadow-lg">
        <span className="h-[45px] my-[7.5px] font-semibold text-primary">
          TEMPO
          <br />
          RESTANTE
        </span>
        <div className="text-[40px]">
          <span>{hours}</span>
          <span className="text-concrete">:</span>
          <span>{minutes}</span>
          <span className="text-concrete">:</span>
          <span>{seconds}</span>
        </div>
      </section>
  );
}

export default Countdown;

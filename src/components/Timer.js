import { useEffect, useState } from 'react';
import './Timer.css'

export function Timer({updateStyleLinked, idProduct}) {
  const min = 60
  const max = 300
  const random = Math.floor(min + Math.random() * (max - min))
  const [time, setTimer] = useState(random);

  useEffect(() => {
        let interval = null;

        if(time > 0){
          interval = setInterval(() => {
            setTimer(count => count - 1);
          }, 1000)
                    
        }
        else{
          updateStyleLinked(idProduct, 'Card__Disabled')
        }
        return () => {
          clearInterval(interval)
        };
    }, [time]);

  return (
    <p className='Timer'>
      {new Date(time * 1000).toISOString().substr(11, 8)}
    </p>
  );
}


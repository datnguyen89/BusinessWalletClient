import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const ProtectedPage = props => {

  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])

    return (
        <div>
          <div>
            {timeLeft === 0 ? <a onClick={() => setTimeLeft(3)}>reset</a> : timeLeft}
          </div>
        </div>
    );
};

ProtectedPage.propTypes = {
    
};

export default ProtectedPage;
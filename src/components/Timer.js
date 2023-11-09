import { useEffect } from "react";

function Timer({ dispatch, secondsRemain }) {
  const minute = Math.floor(secondsRemain / 60);
  const second = secondsRemain % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div>
      {minute < 10 && "0"}
      {minute} :{second < 10 && "0"}
      {second}
    </div>
  );
}

export default Timer;

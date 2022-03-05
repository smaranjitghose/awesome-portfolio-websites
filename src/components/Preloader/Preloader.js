import React, { useEffect, useState } from "react";
import "./Preloader.css";
const Preloader = () => {

    const [done, setDone] = useState(undefined);
  
    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            setDone(true);
          });
      }, 1000);
    }, []);

    return (
        <>
        {!done ? (
        <div class="loader-container">
            <div class="atom">
                <div class="electron"></div>
                <div class="electron-alpha"></div>
                <div class="electron-omega"></div>
		    </div>
        </div>
        ) : (" ")}
      </>
    )
}

export default Preloader;
"use client"
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Example = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [" C++. ", " NextJS.","Tailwind CSS." ,"Video Editing.","Data Structures &amp; algorithms."],
      typeSpeed: 50,
      backSpeed:20,
      loop: true

    });
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default Example;

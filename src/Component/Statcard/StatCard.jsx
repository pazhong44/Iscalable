import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ number, label, color }) => {
  const numberRef = useRef(null);

useEffect(() => {
  if (!number || !numberRef.current) return;

  const rawNum = String(number).replace(/[^0-9]/g, "");
  const finalValue = parseInt(rawNum, 10) || 0;

  const obj = { val: 0 }; // fake counter

  gsap.to(obj, {
    val: finalValue,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: numberRef.current,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      let formatted = Math.floor(obj.val).toLocaleString();

      if (String(number).includes("$")) formatted = "$" + formatted;
      if (String(number).includes("+")) formatted = formatted + "+";

      numberRef.current.innerText = formatted;
    }
  });
}, [number]);


  return (
    <div className={`stat-card ${color ? "highlight" : ""}`}>
      {/* Don’t put {number} here → we overwrite it with GSAP */}
      <h2 ref={numberRef}></h2>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;

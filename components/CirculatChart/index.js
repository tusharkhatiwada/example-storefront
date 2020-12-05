import React, { useState, useEffect } from "react";

import styles from "./style.module.css";

const CircularChart = ({ color, progress }) => {
  const [animate, toggleAnimate] = useState(false);

  const radius = 80;
  const circumference = 2 * 3.14 * radius;
  const strokeLength = toggleAnimate ? circumference * progress : 0;

  useEffect(() => {
    toggleAnimate(!animate);
  }, [animate]);

  return (
    <div className={`${styles.circularChart} ${strokeLength === 0 && styles.noProgress}`}>
      <svg viewBox="0 0 200 200" width={200} height={200}>
        <circle
          className={styles.chartTotal}
          stroke={color}
          strokeWidth={10}
          fill={`${color}f5`}
          cx="100"
          cy="100"
          r={radius}
        />
        <text x="50%" y="50%" text-anchor="middle" stroke="#000" stroke-width="0px" dy=".3em" font-size="3em">
          {`${progress * 100}%`}
        </text>
        <circle
          className={styles.chartProgress}
          stroke={color}
          strokeWidth={10}
          strokeDasharray={`${strokeLength},${circumference}`}
          strokeLinecap="round"
          fill="none"
          cx="100"
          cy="100"
          r={radius}
        />
      </svg>
    </div>
  );
};

export default CircularChart;

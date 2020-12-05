import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import styles from "./style.module.css";

const CircularChart = ({ color, value, label }) => {
  const radius = 80;
  const circumference = 2 * 3.14 * radius;
  const strokeLength = circumference * value;

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ textAlign: "center" }}>
          {label}
        </Typography>
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
            <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="0px" dy=".3em" fontSize="3em">
              {`${value * 100}%`}
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
      </CardContent>
    </Card>
  );
};

export default CircularChart;

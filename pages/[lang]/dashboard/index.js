import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CircularChart from "../../../components/CirculatChart";

const Dashboard = () => {
  return (
    <Card style={{ maxWidth: 300, justifyContent: "center", display: "flex", margin: 30 }}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ textAlign: "center" }}>
          Facebook
        </Typography>
        <CircularChart progress={0.67} color="#D73775"></CircularChart>
      </CardContent>
    </Card>
  );
};

export default Dashboard;

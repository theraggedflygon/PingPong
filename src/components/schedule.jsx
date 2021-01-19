import React from "react";

const Schedule = () => {
  return (
    <React.Fragment>
      <h1 style={{ color: "white" }}>Schedule of Events</h1>
      <h3 style={{ color: "white" }}>
        All events streamed on Twitch.tv/theraggedflygon
      </h3>
      <table
        align="center"
        style={{ color: "white", border: "1px solid white" }}
      >
        <thead>
          <tr>
            <th>Event</th>
            <th>Dates</th>
            <th>Time (CT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Middlebrook 7th Floor Ping Pong Classic</th>
            <th>October 16th-18th, 2020</th>
            <th>6:00-9:00 PM</th>
          </tr>
          <tr>
            <th>7th Floor is Back Ping Pong Tournament</th>
            <th>January 29th-31st, 2021</th>
            <th>6:00-9:00 PM</th>
          </tr>
          <tr>
            <th>7th Floor Winter Talent Show</th>
            <th>TBD</th>
            <th>TBD</th>
          </tr>
          <tr>
            <th>7th Floor Decathalon</th>
            <th>TBD</th>
            <th>TBD</th>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Schedule;

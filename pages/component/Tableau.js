import React, { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

let TableauReport;

const Tableau = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  console.log(isTablet);

  const options = {
    padding: "0",
    margin: "0",
    width: `${screenWidth}px`,
    height: "2227px",
    device: isTablet ? "tablet" : "desktop",
  };

  console.log(options);

  useEffect(() => {
    if (typeof window !== undefined) {
      TableauReport = require("tableau-react");
      setScreenWidth(window.innerWidth);
    }
  }, []);
  return (
    <>
      {screenWidth ? (
        <TableauReport
          url="https://public.tableau.com/views/LeadershipDraft/AssetsDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          options={options}
        />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Tableau;

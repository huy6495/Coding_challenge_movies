import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import "./_future.scss";

export default function FutureGateway() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h3 className="w90 mx-auto">Inspiration for future getaways</h3>
      <div className="w90 mx-auto mt-3">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "black",
                },
              }}
            >
              <Tab
                label="Destinations for arts & culture"
                value="1"
                sx={{
                  padding: "0 0",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  textTransform: "none",
                  color: "black!important",
                }}
                className="button-tab"
              />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

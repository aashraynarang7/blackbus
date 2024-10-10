import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Input1 from "./components/Input1";
const Home = () => {
  return (
    <Box
      sx={{
        height: 800,
        width: "100%",
        bgcolor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ p: 20, display: "flex", direction: "column" }}>
        
        <form>
        <Typography sx={{ color: "white", fontSize:"55px", fontWeight:700 }}>
          Go anywhere with <br /> blackBus
        </Typography><br />
          <Input1/>
          <br />
          <input
            type="text"
            placeholder="Enter destination"
            style={{ width: "400px", height: "45px" }}
          /><br/>
          <button type="submit" style={{marginTop:"20px",fontSize:"16px",padding:" 10px 20px",backgroundColor:"white",borderRadius:"25px"}}>See prices</button>
        </form>
      </Box>

      <Box>
        <img src="Ride-with-Uber.png" width="80%" alt="" />
      </Box>
    </Box>
  );
};

export default Home;

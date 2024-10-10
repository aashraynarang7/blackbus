import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 60,
          bgcolor: "black",
          color: "white",
          display: "flex",
          justifyContent:"space-around",
          alignItems:"center"
        }}
      >
        <Box sx={{position:"absolute", left: "200px" }}>
          <Typography style={{ fontSize: "24px"}}>blackBus</Typography>
        </Box>
        <Box sx={{position:"absolute", right: "200px" , display:"flex"}}>
          <Typography sx={{fontSize:"15px", mr:0.5,p:"5px 15px",borderRadius:"15px", '&:hover':{bgcolor:"rgba(100,100,100,0.5)"}}}>Log in</Typography>
          
          <Typography sx={{fontSize:"15px",mr:1,p:"5px 10px",borderRadius:"15px",bgcolor:"white", color:"black",'&:hover':{bgcolor:"rgb(200,200,200)"}}}>Sign up</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

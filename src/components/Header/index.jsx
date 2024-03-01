import React from 'react'
import { Typography, Box } from "@mui/material";



const Header = ({title}) => {
  return (
   
    <Box sx={{
        backgroundColor: 'primary.main'}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      
    </Box>

  );
}

export default Header

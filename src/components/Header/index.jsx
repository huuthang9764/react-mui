import React from 'react'
import { Typography } from "@mui/material";
import BaseBox from '../base_box/BaseBox';



const Header = ({title}) => {
  return (

    <BaseBox sx={{
      backgroundColor: 'primary.main'
    }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>

    </BaseBox>

  );
}

export default Header

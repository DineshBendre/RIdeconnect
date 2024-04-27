import React from "react";
import myImage from "../../public/sucess.jpg";
import correctImage from "../../public/corect3.webp";
import Image from "next/image";
import { Filter, Opacity } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { posix } from "path";

const page = () => {
  const blurRadius = 6;
  const imageStyle = {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    filter: `blur(${blurRadius}px)`,
    position: "relative",
  };

  return (
    <Box>
      <Image src={myImage} alt="Your image description" style={imageStyle} />

      <Grid>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: "50px",
            position: "absolute", // Position text within container
            top: "30%", // Center vertically (adjust as needed)
            left: "50%", // Center horizontally (adjust as needed)
            transform: "translate(-50%, -50%)",
          }}
        >
          Congratulations....
        </Typography>
        <Grid>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            We Have Sucessfully Sent Taxi Information On Your Registered
            Email-id....
          </Typography>
          <Image
            height={200}
            width={200}
            src={correctImage}
            alt="Your image description"
            style={{
              position: "absolute",
              top: 350,
              left: 650,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;

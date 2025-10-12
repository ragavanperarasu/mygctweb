import React from "react";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const MyGCTHeader = () => {
  return (
    <Box
      sx={{
        // mt: { xs: 15, sm: 20, md: 20 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          background:
            "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 12%, hsla(0, 0%, 80%, 1) 100%)",
          pt: { xs: 15, sm: 20, md: 20 },
          pb: 10,
          width: '100%',
    maxWidth: '100vw',  // 👈 prevent overflow
    overflowX: 'hidden', // 👈 hide horizontal scrollbar
    boxSizing: 'border-box',
        }}
      >
        <Box
          component="img"
          src="./log.png"
          alt="My GCT Logo"
          sx={{
            height: { xs: 400, sm: 350, md: 500 },
            width: "auto",
          }}
        />

        <Box
          component="img"
          src="./bg.png"
          alt="My GCT App"
          sx={{
            height: { xs: 300, sm: 400, md: 550 },
            width: "auto",
          }}
        />
      </Box>

      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          fontFamily: "Philosopher",
          fontSize: { xs: 19, sm: 30, md: 40 },
          color: "#003262",
          mt: 4,
        }}
      >
        <TypeAnimation
          sequence={[
            "🎓 Education is Learning, Sharing, and Growing",
            2000,
            "💡 Knowledge grows when shared",
            2000,
            "🤝 Together we learn, together we rise",
            2000,
            "🧠 Innovation begins with curiosity",
            2000,
            "🎨 Collaboration sparks creativity",
            2000,
            "🌟 Dream. Learn. Achieve.",
            2000,
            "📚 Empower your mind through learning",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Typography>

      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          fontFamily: "Philosopher",
          fontSize: { xs: 16, sm: 20, md: 25 },
          color: "#003153",
          mt: 5,
          ml: { xs: 1, sm: 5, md: 10 },
          mr: { xs: 1, sm: 5, md: 10 },
        }}
      >
        My GCT is a platform for GCT students, staff, and alumni to access and
        share learning materials, question papers, and updates, while connecting
        to learn, share, and grow together.
      </Typography>
    </Box>
  );
};

export default MyGCTHeader;

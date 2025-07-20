import * as React from "react";
import Nav from "./Nav";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Link,
  Pagination,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import GetAppIcon from '@mui/icons-material/GetApp';
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}>
      <Nav />

      <Box
        sx={{
          mt: 10,
          ml: 1,
          mr: 1,
          borderRadius: 3,
          background:
            "linear-gradient(90deg, hsla(225, 78%, 59%, 1) 0%, hsla(197, 85%, 51%, 1) 100%)",
          pl: {xs: 2, sm:5, md: 5},
          pt: 1,
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            mt: 1,
            fontFamily: "Protest Revolution",
            fontSize: {xs: 30, sm: 50, md: 60},
            color: "white",
          }}
        >
          GCT Alumin Support
        </Typography>

        <Button
          variant="outlined"
          onClick={()=>navigate('/alumin')}
          startIcon={<PersonAddIcon />}
          sx={{
            textTransform: "none",
            backgroundColor: "#36454F",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#36454F",
            },
            fontFamily: "Philosopher",
            fontWeight: 800,
            mt:{xs:2, sm:0 , md:0},
            mb: 2,
            color: "white",
            fontSize:{xs:15, sm: 20, md: 20}
          }}
        >
          Connect Now
        </Button>
      </Box>



      <Grid container spacing={2}>
        <Grid size={6}>
        <Box
        sx={{
          mt: 3,
          ml: 1,
          mr: 1,
          borderRadius: 3,
          background:
            "#1CA9C9",
          pl: {xs: 1, sm:5, md: 5},
          pt: 1,
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            mt: 1,
            fontFamily: "Philosopher",
            fontSize: {xs: 20, sm: 25, md: 30},
            color: "white",
          }}
        >
          My GCT App
        </Typography>

        <Button
          variant="outlined"
          onClick={()=>navigate('/alumin')}
          startIcon={<FaGooglePlay />}
          sx={{
            textTransform: "none",
            backgroundColor: "#36454F",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#36454F",
            },
            fontFamily: "Philosopher",
            fontWeight: 800,
            mt:{xs:2, sm:2 , md:2},
            mb: 2,
            color: "white",
            fontSize:{xs:11, sm: 18, md: 20}
          }}
        >
          Play Store
        </Button>
      </Box>
        </Grid>
        <Grid size={6}>
         <Box
        sx={{
          mt: 3,
          ml: 1,
          mr: 1,
          borderRadius: 3,
          background:
            "#43B3AE",
          pl: {xs: 1, sm:5, md: 5},
          pt: 1,
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            mt: 1,
            fontFamily: "Philosopher",
            fontSize: {xs: 20, sm: 25, md: 30},
            color: "white",
          }}
        >
          My GCT App
        </Typography>

        <Button
          variant="outlined"
          onClick={()=>navigate('/alumin')}
          startIcon={<AiFillAndroid />}
          sx={{
            textTransform: "none",
            backgroundColor: "#36454F",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#36454F",
            },
            fontFamily: "Philosopher",
            fontWeight: 800,
            mt:{xs:2, sm:2 , md:2},
            mb: 2,
            color: "white",
            fontSize:{xs:11, sm: 18, md: 20}
          }}
        >
          Download APK
        </Button>
      </Box>
        </Grid>
      </Grid>
    </div>
  );
}

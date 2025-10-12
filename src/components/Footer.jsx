import React from 'react'
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


export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#003153', p: 2, mt:10}}>
    <Typography variant="body1" sx={{ color: 'white', fontFamily: "Philosopher", fontSize: { xs: 16, sm: 20, md: 20 },}}>
        My GCT Support
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', fontFamily: "Philosopher",mt:2, fontSize: 16,mb:2,}}>
        Email : ragavan.devp@gmail.com
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', fontFamily: "Philosopher", textAlign:'center', fontSize: 16,}}>
        © 2025 My GCT. All rights reserved.
      </Typography>
    </Box>
  )
}

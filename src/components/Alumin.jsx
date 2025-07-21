import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
  LinearProgress
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import mygct from '../assets/mygct.png'

const Alumin = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); 

  const fetchProfiles = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://mygct.org/app/getalu?page=${pageNum}&limit=15`);
      setProfiles(res.data.data);
      setTotalPages(res.data.totalPages);
      setPage(res.data.page);
      console.log(res)
    } catch (err) {
      console.error("Failed to fetch alumni profiles", err);
    }finally {
    setLoading(false);
  }

  };

  useEffect(() => {
    fetchProfiles(page);
  }, [page]);

  const handlePageChange = (_, value) => {
    setPage(value);
    fetchProfiles(value);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}>
      <Nav />
      
      


      {loading ? (
<Box
  sx={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    px: 4,
    marginTop:'10%'
  }}
>
  <img
    src={mygct}
    alt="Loading"
    style={{ width: 200, height: 200 }}
  />
  <Box sx={{ width: '100%', maxWidth: 150 }}>
    <LinearProgress color="success" />
  </Box>
</Box>
) : (
  <div>
  <Box sx={{ backgroundColor: "#00A86B", m: 1.5, p: 2, borderRadius: '10px', marginBottom:4, marginTop:10}}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          onClick={() => navigate('/createalumin')}
          sx={{
            textTransform: 'none',
            backgroundColor: "white",
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#f0f0f0'
            },
            fontFamily:"Philosopher",
            fontWeight:800,
          }}
        >
          Add My Profile
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ px: 2, pb: 4, justifyContent:"space-evenly" }}>
        {profiles.map((alumin) => (
          <Grid item xs={12} sm={6} md={4} key={alumin._id}>
            <Card
              sx={{
                borderRadius: 5,
                p: 2,
                textAlign: 'center',
                boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                maxWidth: 260,
              }}
            >
                <Box
      sx={{
        height: 120,
        backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`,
        m:-2
      }}
    />
              <Avatar
                alt={alumin.name}
                src={`https://mygct.org/app/${alumin.ipath}`}
                sx={{
                  width: 180,
                  height: 180,
                  mx: 'auto',
        mt: -12,
        mb: 1,
                  border: '5px solid #ffffffff'
                }}
              />
              <Typography variant="h6" fontWeight={600} sx={{ mt: 1 ,fontFamily:"Philosopher"}}>
  {alumin.name}
</Typography>

<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 ,fontFamily:"Philosopher"}}>
  {alumin.dept} &nbsp;|&nbsp; Batch: {alumin.year}
</Typography>


<Box sx={{ mt: 1, display: 'flex', alignItems: 'center', textAlign: 'left' }}>
   <WorkOutlineIcon sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
  <Typography variant="body2" sx={{fontFamily:"Philosopher"}}>
    {alumin.domain}
  </Typography>
</Box>

<Box sx={{ mt: 1, display: 'flex', alignItems: 'center', textAlign: 'left' }}>
  <EmailIcon sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
  <Typography variant="body2" sx={{fontFamily:"Philosopher"}}>
    {alumin.email}
  </Typography>
</Box>

<Link
  href={alumin.linkedin}
  target="_blank"
  rel="noopener"
  underline="none"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    mt: 1.5,
    color: 'white',
    fontWeight: 500,
    backgroundColor: "#0070BB",
    p: 1.5,
    borderRadius: 2,
    width: '90%',
    textAlign: 'center',
    fontFamily:"Philosopher"
  }}
>
  <LinkedInIcon sx={{ fontSize: 24 }} />
  LinkedIn
</Link>



            </Card>
          </Grid>
        ))}
      </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:5, marginBottom:10}}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>

</div>

      )}

    </div>
  );
};

export default Alumin;

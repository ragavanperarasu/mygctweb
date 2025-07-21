import React, { useState, useCallback } from "react";
import Nav from "./Nav";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  Stack,
  LinearProgress,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import getCroppedImg from "./cropImage"; // utility function you'll add
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import mygct from '../assets/mygct.png'


const deptdata = [
  { label: "Civil Engineering", value: "Civil Engineering" },
  {
    label: "Computer Science Engineering",
    value: "Computer Science Engineering",
  },
  {
    label: "Electronics And Communication Engineering",
    value: "Electronics And Communication Engineering",
  },
  {
    label: "Electrical And Electronics Engineering",
    value: "Electrical And Electronics Engineering",
  },
  {
    label: "Electronics And Instrumentation Engineering",
    value: "Electronics And Instrumentation Engineering",
  },
  { label: "Industrial Bio Technology", value: "Industrial Bio Technology" },
  { label: "Information Technology", value: "Information Technology" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Production Engineering", value: "Production Engineering" },
];

const CreateAlumin = () => {

  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropOpen, setCropOpen] = useState(false);

  const [name, setName] = useState("");
  // const [mobile, setMobile] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const [loading, setLoading] = useState(false); 

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImg = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        800,
        800
      );
      setCroppedImage(croppedImg);
      setCropOpen(false);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result);
        setCropOpen(true);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append('name', name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
      formData.append('year', year);
      formData.append('email', email.toLowerCase());
      formData.append('department', department);
      formData.append('domain', domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase());
      formData.append('linkedin', linkedin);

      if (croppedImage) {
        const response = await fetch(croppedImage);
        const blob = await response.blob();
        formData.append('file', blob, 'profile.jpg');
      }
await axios.post('https://mygct.org/app/uplalu', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}).then((res) => {
  if (res.data === "done") {
    setLoading(true)
    navigate('/alumin');
    alert("Submitted Successfully!");
  }
});

    

    } catch (error) {
      console.error("Submit failed", error);
      alert("Submission failed. Try again.");
    }finally{
      setLoading(true)
    }
  };

  function handleSubmitClick(e) {
    e.preventDefault();
    if (
      name === "" ||
      // mobile === "" ||
      year === "" ||
      email === "" ||
      domain == "" ||
      linkedin == "" ||
      department === ""
    ) {
      setShowAlert(true);
      return
    }
    else if(!croppedImage){
      setShowAlert2(true);
      return
    }
    else if (email && !email.includes('@')) {
      alert("Invalid email: missing '@' symbol.");
    }
    else{
      handleSubmit()
    }
  }

  return (
    <div style={{ backgroundColor: "transparent", minHeight: "100vh" }}>

    
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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: { xs: "80%", sm: "80%", md: "50%" },
          mx: "auto",
          marginTop:10,
          marginBottom:50,
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
                rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`,
    borderRadius: '20px',
    p: 3,
    backgroundColor: 'white',
          paddingTop:5


        }}
      >
        {croppedImage && (

          <div>
 <Box
      sx={{
        height:{
         xs: 100,  // Small screens
          sm: 130,  // Tablets
          md: 180,  // Medium and up 
        },
        backgroundColor: "#F77FBE",
        mt: -4.9,
        mr: -3,
        ml: -3,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        color: 'white',
        textAlign: 'center',
        pt: 3,
        fontFamily: "Philosopher",
        fontWeight: 800,
        fontSize: {
          xs: 28,  // Small screens
          sm: 36,  // Tablets
          md: 50,  // Medium and up
        }
      }}
    >
      Alumni New Profile
    </Box>
          <Box
            mb={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              mt:{
          xs: -7,  // Small screens
          sm: -10,  // Tablets
          md: -13,  // Medium and up
        }
            }}
          >
            {/* Profile Image */}
            <Avatar
              src={croppedImage}
              alt="Profile"
           
                      sx={{
          width: {
            xs: 120, 
            sm: 150,
            md: 200
          },
          height: {
            xs: 120,
            sm: 150,
            md: 200
          },
          bgcolor: "#ccc"
        }}
            />

            {/* Plus Icon Button */}
            <IconButton
              component="label"
              sx={{
                position: "absolute",
                bottom: 10,
                right: "calc(50% - 100px + 10px)", // center align logic
                backgroundColor: "#fff",
                boxShadow: 2,
                "&:hover": { backgroundColor: "#eee" },
              }}
            >
              <AddAPhotoIcon color="primary" />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </IconButton>
          </Box></div>
        )}

        {!croppedImage && (
  <div>
    <Box
      sx={{
        height:{
         xs: 100,  // Small screens
          sm: 130,  // Tablets
          md: 180,  // Medium and up 
        },
        backgroundColor: "#F77FBE",
        mt: -4.9,
        mr: -3,
        ml: -3,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        color: 'white',
        textAlign: 'center',
        pt: 3,
        fontFamily: "Philosopher",
        fontWeight: 800,
        fontSize: {
          xs: 28,  // Small screens
          sm: 36,  // Tablets
          md: 50,  // Medium and up
        }
      }}
    >
      Alumni New Profile
    </Box>

    <Box
      mb={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        mt:{
          xs: -7,  // Small screens
          sm: -10,  // Tablets
          md: -13,  // Medium and up
        } 
      }}
    >
      <Avatar
        sx={{
          width: {
            xs: 120, // Small screen avatar size
            sm: 150,
            md: 200
          },
          height: {
            xs: 120,
            sm: 150,
            md: 200
          },
          bgcolor: "#ccc"
        }}
      />

      <IconButton
        component="label"
        sx={{
          position: "absolute",
          bottom: 10,
          right: {
            xs: "calc(50% - 60px + 10px)",
            sm: "calc(50% - 75px + 10px)",
            md: "calc(50% - 100px + 10px)"
          },
          backgroundColor: "#fff",
          boxShadow: 2,
          "&:hover": { backgroundColor: "#eee" },
        }}
      >
        <AddAPhotoIcon color="primary" />
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
          required
        />
      </IconButton>
    </Box>
  </div>
)}


<Box
  mb={2}
  sx={{
    borderRadius: '12px',
  }}
>
<TextField
  fullWidth
  label="Your Name"
  variant="outlined"
  type="text"
  value={name}
  onChange={(e) => {
    setName(e.target.value);
    setShowAlert(false);
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
     
  }}
/>

</Box>


        {/* <Box mb={2}   sx={{
    borderRadius: '12px',
  }}>
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            type="number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
              setShowAlert(false);
            }}
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
    },
  }}
          />
        </Box> */}

        <Box mb={2}>
          <TextField
            fullWidth
            label="Passed Out Year"
            variant="outlined"
            type="number"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setShowAlert(false);
            }}
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
  }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Email ID"
            variant="outlined"
            type="email"

            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShowAlert(false);
            }}
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
  }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            select
            label="Select Department You Studyed"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setShowAlert(false);
            }}
            variant="outlined"
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
  }}
          >
            {deptdata.map((dept) => (
              <MenuItem key={dept.value} value={dept.value}>
                {dept.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Which Domain You Spicalist"
            variant="outlined"
            type="text"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
              setShowAlert(false);
            }}
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
  }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="LinkedIn Profile URL"
            variant="outlined"
            type="text"
            value={linkedin}
            onChange={(e) => {
              setLinkedin(e.target.value);
              setShowAlert(false);
            }}
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily:"Philosopher",
    },
  }}
          />
        </Box>

        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={3} >
            <Alert severity="info" sx={{fontFamily:"Philosopher"}}>Please Fill All Fields</Alert>
          </Stack>
        )}
                {showAlert2 && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="info" sx={{fontFamily:"Philosopher"}}>Please Upload Your Image</Alert>
          </Stack>
        )}

        <Box mt={2} mb={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAddIcon />}
            sx={{ width: "100%", fontFamily:"Philosopher", textTransform:'none', fontSize:25, borderRadius:2}}
            component="form"
            autoComplete="off"
            onClick={handleSubmitClick}
          
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* Crop Dialog */}
      <Dialog
        open={cropOpen}
        onClose={() => setCropOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Crop Your Image (500x500px)</DialogTitle>
        <DialogContent>
          <div style={{ position: "relative", width: "100%", height: 400 }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropSize={{ width: 500, height: 500 }}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCropOpen(false)}>Cancel</Button>
          <Button onClick={showCroppedImage} variant="contained">
            Crop
          </Button>
        </DialogActions>
      </Dialog>
    </div>)}
    
    </div>
  );
};

export default CreateAlumin;

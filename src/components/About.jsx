import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Grid, // Added Grid for complex responsive layout
  Divider, 
  Stack, 
  IconButton, 
  Card,
} from '@mui/material';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import Nav from './Nav';

/**
 * A reusable component for a placeholder screenshot card.
 * @param {string} color The background color of the placeholder.
 * @param {string} text The text to display on the placeholder.
 */
const ScreenshotCard = ({ color, text }) => (
  <Card 
    sx={{ 
      minWidth: 280, 
      height: 200, 
      backgroundColor: color, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 3,
      boxShadow: 3,
      mr: 2,
    }}
  >
    <Typography variant="body1" color="white" fontWeight="bold">
      {text}
    </Typography>
  </Card>
);

/**
 * The main component rendering the "My GCT Hub" app listing page.
 * Designed to mimic an app store detail view, now with full desktop responsiveness.
 */
const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const appData = {
    name: "My GCT Hub",
    developer: "Ragavan Developer",
    rating: 4.7,
    totalRatings: "2,500 reviews",
    downloads: "50K+ downloads",
    size: "45 MB",
    contentRating: "E - Everyone",
    description: `
      My GCT Hub is your single source for managing all your cloud deployments and team collaborations. 
      Seamlessly monitor service health, manage resource allocation, and communicate with your team 
      in real-time. This application is built for speed and reliability, ensuring you have critical 
      information right at your fingertips. We prioritize security with two-factor authentication 
      and end-to-end encryption for all data transfers. The latest update includes a new dark mode 
      interface, enhanced performance analytics dashboards, and integrated ticketing system support. 
      Stay productive, stay connected.
    `,
    screenshots: [
      { color: '#42a5f5', text: 'Dashboard Overview' },
      { color: '#66bb6a', text: 'Team Chat Interface' },
      { color: '#ff7043', text: 'Resource Management' },
      { color: '#ab47bc', text: 'Settings & Security' },
    ]
  };

  const truncatedDescription = appData.description.substring(0, 250) + '...';

  const InfoChip = ({ icon, label, subLabel }) => (
    <Stack direction="column" alignItems="center" spacing={0.5} sx={{ minWidth: 80 }}>
      {icon}
      <Typography variant="subtitle2" fontWeight="bold" lineHeight={1}>
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" lineHeight={1}>
        {subLabel}
      </Typography>
    </Stack>
  );

  return (
    <Container 
      maxWidth="lg" // Allow content to expand for a desktop view
      sx={{ 
        pt: 10,
        backgroundColor: 'background.paper',
        minHeight: '100vh',
        // Optional styling for mobile view on larger screens, removed fixed max width
      }}
    >
    <Nav/>
     
      {/* 2. App Hero Section - Responsive Grid Layout */}
      <Box sx={{ p: 3, pt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          
          {/* Left/Center Column (Icon, Title, Ratings) - Takes 12 columns on mobile, 9 on desktop */}
          <Grid item xs={12} md={9}>
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={{ xs: 2, md: 3 }} 
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >

              <Box
                        component="img"
                        src="./mygcti.png"
                        alt="My GCT App"
                        sx={{
                          height: { xs: 100, sm: 100, md: 100 },
                          width: "auto",
                          maxWidth: { xs: "80%", sm: "45%", md: "40%" }, // scale responsively
                          mx: "auto",
                        }}
                      />
              

              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h4" component="h1" fontWeight="bold">
                  {appData.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {appData.developer}
                </Typography>
                
                {/* Rating and Info Stack (Kept horizontal for both views) */}
                <Stack 
                  direction="row" 
                  spacing={3} 
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  alignItems="center" 
                  my={3} 
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <InfoChip 
                    icon={<StarIcon sx={{ color: 'text.primary', fontSize: 20 }} />}
                    label={appData.rating}
                    subLabel={appData.totalRatings}
                  />
                  <InfoChip 
                    icon={<InstallDesktopIcon sx={{ color: 'text.primary', fontSize: 20 }} />}
                    label="Installed"
                    subLabel={appData.downloads}
                  />
                  <InfoChip 
                    icon={<InfoIcon sx={{ color: 'text.primary', fontSize: 20 }} />}
                    label={appData.size}
                    subLabel={appData.contentRating}
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          
          {/* Right Column (Action Button) - Takes 12 columns on mobile, 3 on desktop */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, pt: { md: 5 } }}>
            <Button 
              variant="contained" 
              color="success" // Changed to green (success) for Play Store look
              size="large" 
              sx={{ 
                width: { xs: '100%', sm: 200, md: '100%' }, // Full width on mobile/narrow view, wider on desktop column
                borderRadius: 8, 
                textTransform: 'none', 
                fontWeight: 'bold', 
                mt: { xs: 0, md: 0 } 
              }}
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* 3. Screenshots/Media Section (Horizontal Scroll) */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Media & Screenshots
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            overflowX: 'auto', 
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
            msOverflowStyle: 'none', // IE and Edge
            scrollbarWidth: 'none', // Firefox
          }}
        >
          {appData.screenshots.map((screen, index) => (
            <ScreenshotCard key={index} color={screen.color} text={screen.text} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* 4. About This App Section */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          About this app
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-wrap' }}>
          {showFullDescription ? appData.description : truncatedDescription}
        </Typography>
        <Button 
          onClick={() => setShowFullDescription(!showFullDescription)} 
          sx={{ textTransform: 'none', color: '#1976d2', p: 0, mt: 1 }}
        >
          {showFullDescription ? 'Show less' : 'Read more'}
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* 5. Developer Contact Section */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Developer
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              Ragavan Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visit website • Support
            </Typography>
          </Box>
        </Stack>
      </Box>
      
      <Box sx={{ height: 50 }} /> {/* Footer space */}
    </Container>
  );
};

export default About;
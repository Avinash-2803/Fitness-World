import React, { useRef, useEffect,useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage1 from '../assets/assets/video/latpulldown.mp4'; 
import HeroBannerImage2 from '../assets/assets/video/squats.mp4';
import HeroBannerImage3 from '../assets/assets/video/overheadtricep.mp4';

const HeroBanner = () => {
  const videoRef = useRef(null);
  const[fade,setFade]=useState(false);

  // List of video sources
  const videoSources = [HeroBannerImage1, HeroBannerImage2, HeroBannerImage3];
  let currentVideoIndex = 0;

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to play the next video
    const playNextVideo = () => {
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length; // Loop back to the first video
      videoElement.src = videoSources[currentVideoIndex];
      videoElement.play();
    };

    // Attach event listener for video end
    videoElement.addEventListener('ended', playNextVideo);

    // Cleanup the event listener on unmount
    return () => {
      videoElement.removeEventListener('ended', playNextVideo);
    };
  }, []);

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: { lg: '200px', xs: '150px' },
        }}
      >
        Exercise
      </Typography>
      <video
        ref={videoRef}
        src={videoSources[0]} // Start with the first video
        className="hero-banner-img"
        loop={false} // Turn off looping as we are managing manually
        autoPlay
        muted
        style={{
          width: '50%', // Full width
          height: '600px', // Increased height
          objectFit: 'cover', // Ensures the video fills the container
          borderRadius: '10px', // Rounded corners for better aesthetics
          top:"10%",
          zIndex: -1, // Send video to the back
          transition: 'opacity 1s ease-in-out', // Smooth transition
          opacity: fade ? 0 : 1, // Fade effect
        }}
      />
    </Box>
  );
};

export default HeroBanner;

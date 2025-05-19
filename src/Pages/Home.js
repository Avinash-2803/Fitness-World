import React, { useState } from 'react';
import { Box, Container,Button } from '@mui/material';

import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';
import { Link } from 'react-router-dom';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      {/* HeroBanner component at the top */}
      <HeroBanner />

    <Box display="flex" justifyContent="center" mt={2}>
        <Link to="/user" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Manage Workout Plans
          </Button>
        </Link>
      </Box>

      {/* Search and display exercises based on the body part */}
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises 
        setExercises={setExercises} 
        exercises={exercises} 
        bodyPart={bodyPart} 
      />

    </Box>
  );
};

export default Home;

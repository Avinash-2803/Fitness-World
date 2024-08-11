import React, { useState } from 'react';
import { Box, Container } from '@mui/material';

import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      {/* HeroBanner component at the top */}
      <HeroBanner />

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

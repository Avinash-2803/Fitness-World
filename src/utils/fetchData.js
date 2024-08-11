export const exerciseOptions=  {
	
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/status',
        headers: {
          'x-rapidapi-key':process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

   export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-Rapidapi-KEY': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
export const fetchData = async (url, options) => {
   const res=await fetch(url,options);
   const data =await res.json();
  
    return data;
  };
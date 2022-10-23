
export default async function getFoodSpecs(queryItemName) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
      }
    };
    
    const response = await fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${queryItemName}`, options)
    const data_json = response.json()
    
    return data_json
    
  }
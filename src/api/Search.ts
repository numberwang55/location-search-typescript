export const search = async (term: string) => {
  const result = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  )
  const data = await result.json()
  console.log(data);
  
}
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogImage, setDogImage] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        if (data?.status === "success") {
          setIsLoading(false);
          setDogImage(data.message);
        }
      })
  }, [])
  return (
    <>
      {isLoading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}

    </>
  )
}

export default App;
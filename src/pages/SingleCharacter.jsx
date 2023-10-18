import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Character from "../components/character";
import Location from "../components/Location";
import Episodes from "../components/Episodes";
import Footer from "../components/Footer";
import RickMortyImage from "../assets/Rick_and_Morty.svg.png";

const SingleCharacter = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setCharacter(response.data);
        const episodeUrls = response.data.episode;
        const episodeIds = episodeUrls.map((url) => url.split("/").pop());
        const episodeData = await Promise.all(
          episodeIds.map(async (id) => {
            const episodeResponse = await axios.get(
              `https://rickandmortyapi.com/api/episode/${id}`
            );
            return episodeResponse.data.name;
          })
        );
        setEpisodeData(episodeData);
      } catch (error) {
        console.error("Error fetching character data", error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-4">
      <img src={RickMortyImage} alt="RickMortyImage" className="w-96 mb-8" />
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <div className="flex flex-col space-y-8">
            <Character character={character} />
            <Location location={character.location} />
          </div>
          <div className="overflow-auto max-h-96">
            <Episodes episodes={episodeData} />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SingleCharacter;

import { useState, useEffect } from "react";
import axios from "axios";
import Character from "../components/character";
import RickMortyImage from "../assets/Rick_and_Morty.svg.png";
import Footer from "../components/Footer";
const apiURL = "https://rickandmortyapi.com/api/character";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiURL}?page=${page}&status=${statusFilter}`
        );
        if (page === 1) {
          setCharacters(response.data.results.slice(0, 8));
        } else {
          setCharacters((prevCharacters) => [
            ...prevCharacters,
            ...response.data.results,
          ]);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [page, statusFilter]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  return (
    <>
      <div className="home-page container mx-auto py-6">
        <img
          src={RickMortyImage}
          alt="RickMortyImage"
          className="w-96 mb-8 mt-2 mx-auto"
        />
        <h1 className="text-gray-700 text-3xl font-semibold mb-6">
          Rick and Morty Characters
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Filter by Status:
          </label>
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="bg-teal-700  block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            <option value="dead">Dead</option>
            <option value="alive">Alive</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
        {characters.length >= 8 && (
          <div className="mt-8">
            <button
              className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 border-gray-300 rounded"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

import { Link, useLocation } from "react-router-dom";

const Character = ({ character }) => {
  const location = useLocation();
  const isSingleCharacterPage = location.pathname.startsWith("/profile");
  return (
    <div className="bg-white rounded-md shadow-lg p-4 max-w-xs text-gray-700 border-solid border-2">
      <img
        className="w-full h-auto rounded shadow"
        src={character.image}
        alt={character.name}
      />
      <h2 className="text-xl font-bold mb-2 mt-2">{character.name}</h2>
      <div className="leading-normal mb-1">
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
      {isSingleCharacterPage ? (
        <Link to="/">
          <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded mt-4">
            Back to Home
          </button>
        </Link>
      ) : (
        <Link to={`/profile/${character.id}`}>
          <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded mt-4">
            View Profile
          </button>
        </Link>
      )}
    </div>
  );
};

export default Character;

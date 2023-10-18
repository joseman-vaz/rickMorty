const Episodes = ({ episodes }) => {
  return (
    <div className="bg-white rounded-md max-w-xs text-gray-700 relative">
      <h2 className="text-gray-700 text-lg font-semibold mb-2 bg-white w-full z-10 sticky top-0 p-2 left-0">
        Episodes:
      </h2>
      <div className="p-4">
        <ul className="list-disc p-4 pl-4 text-left">
          {episodes.map((episode, index) => (
            <li key={index}>{episode}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Episodes;

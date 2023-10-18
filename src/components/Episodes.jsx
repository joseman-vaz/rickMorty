const Episodes = ({ episodes }) => {
  return (
    <div className="bg-white rounded-md p-4 max-w-xs text-gray-700 shadow-lg border-solid border-2 ">
      <h2 className="text-lg font-semibold mb-2 bg-white w-full z-10">
        Episodes:
      </h2>
      <ul className="list-disc pl-4 text-left">
        {episodes.map((episode, index) => (
          <li key={index}>{episode}</li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;

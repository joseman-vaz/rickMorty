const Location = ({ location }) => {
  return (
    <div className="bg-white rounded-md p-4 max-w-xs text-gray-700 shadow-lg border-solid border-2">
      <h2 className="text-lg font-semibold mb-2">Location: {location.name}</h2>
    </div>
  );
};

export default Location;

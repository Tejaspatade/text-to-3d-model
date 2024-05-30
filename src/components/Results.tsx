const images = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/200x400",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/250x350",
  "https://via.placeholder.com/350x250",
  "https://via.placeholder.com/300x300",
  // Add more image URLs as needed
];

const Results = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="relative w-full h-0" style={{ paddingBottom: "100%" }}>
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            className="absolute object-cover w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default Results


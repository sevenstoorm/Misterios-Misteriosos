function DecorativeBlob({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#ecfccb" />
          <stop offset="100%" stopColor="#bbf7d0" />
        </linearGradient>
      </defs>
      <path fill="url(#g)" d="M43.1,-70.3C56.2,-59.6,67.7,-49.1,73.5,-35.9C79.3,-22.7,79.4,-6.9,76.7,7.9C74,22.8,68.5,35.8,59.3,46.5C50.2,57.2,37.3,65.6,22.9,71C8.6,76.5,-7.1,79,-22.4,76.6C-37.7,74.2,-52.6,66.8,-63.4,55.1C-74.1,43.4,-80.7,27.4,-81.7,11.2C-82.7,-4.9,-78.1,-21.2,-68.1,-34.7C-58.2,-48.2,-43.9,-58.1,-28,-67C-12.2,-75.9,4.9,-83.8,20.9,-81.2C36.9,-78.6,51.1,-65.1,43.1,-70.3Z" transform="translate(100 100)"/>
    </svg>
  );
}

export default DecorativeBlob;

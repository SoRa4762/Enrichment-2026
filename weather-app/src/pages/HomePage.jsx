const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Home Page</h1>
        <p>Click on any of the button to go to the following app.</p>

        <div style={{ display: "flex", gap: "2px" }}>
          <button>
            <a href="/weather">Weather App</a>
          </button>
          <button>
            <a href="/jikan">Jikan App</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;

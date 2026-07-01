import { Link } from "react-router-dom";

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
            <Link to="/weather">Weather App</Link>
          </button>
          <button>
            <Link to="/jikan">Jikan App</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;

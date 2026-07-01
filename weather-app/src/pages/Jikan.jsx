import { useState } from "react";

const Jikan = () => {
  const [jikanData, setJikanData] = useState([]);

  const jikanApi = "https://api.jikan.moe/v4/anime";

  const fetchJikanData = async () => {
    try {
      const getJikanData = await fetch(jikanApi);
      const jikanDataJson = await getJikanData.json();
      setJikanData(jikanDataJson.data);
      console.log("Jikan Data: ", jikanData);
    } catch (err) {
      console.error("Error fetching the data: ", err);
    }
  };

  return (
    <>
      <div>
        <h1>Jikan App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
          nemo natus laboriosam officiis ipsam repellat est voluptatum
          necessitatibus, fugiat veritatis nobis enim eveniet atque suscipit
          nihil laudantium error? Cumque.
        </p>
        <button style={{ cursor: "pointer" }} onClick={fetchJikanData}>
          Fetch Data
        </button>

        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          {jikanData.map((item, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px black solid",
                  cursor: "pointer",
                }}
                key={index}
              >
                <p>{item.title}</p>
                <img src={item.images.jpg.image_url} alt="image" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jikan;

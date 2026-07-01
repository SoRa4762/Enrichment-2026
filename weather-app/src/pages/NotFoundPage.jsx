const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "red" }}>404 Not Found</h1>
      <hr />
      <h3>This page seems to be missing</h3>
      <p>Contact the Admin?</p>
    </div>
  );
};

export default NotFoundPage;

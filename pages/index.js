/** @jsxImportSource @emotion/core */
import Select from "react-select";

function App() {
  return (
    <div css={{ background: "#ccc", padding: 50 }}>
      <Select />
      <div css={{ color: "red", margin: 20 }}>hello world!</div>
      <button
        css={{
          border: "1px solid black",
          padding: "10px",
          background: "transparent",
          ":hover": { background: "white" },
        }}
      >
        hello world!
      </button>
    </div>
  );
}

export default App;

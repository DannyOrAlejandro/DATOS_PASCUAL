import { useState } from "react";
import pascual from "../src/assets/pascual.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("null");
  const [device, setDevice] = useState(null);
  const [state, setState] = useState("");
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img
            style={{ height: "300px" }}
            src={pascual}
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h2>Dispositivo del que requieres los datos</h2>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => setDevice(e.target.value)}
      />
      <br />
      <button
        onClick={async () => {
          console.log(device);
          setData("null");
          setState("Esperando Datos...");
          await fetch(
            "http://18.191.129.89:1027/modbus=000100" +
              device +
              "0006010300000006?abcde/"
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Dispositivo inexistente");
              } else {
                return response.json();
              }
            })
            .then((data) => {
              setData(data);
              console.log(data);
            })
            .catch((e) => {
              setState("Dispositivo inexistente");
              console.error(e);
            });
        }}
      >
        Traer Datos
      </button>
      <main>
        <div style={{ textAlign: "left" }}>
          {data.Value != null ? (
            <div>
              <p>Device: {data.Device}</p>
              <p>Function: {data.Function}</p>
              <p>Bytes: {data.Bytes}</p>
              <p>Value: {data.Value}</p>
            </div>
          ) : (
            <p>{state}</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

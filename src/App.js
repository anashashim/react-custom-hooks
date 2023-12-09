import { useEffect } from "react";
import useFetchUser from "./hooks/FetchUser";
import "./styles.css";
const url = "https://randomuser.me/api/";

export default function App() {
  const { userList, current, isLoading, next, previous } = useFetchUser(url);

  return (
    <div className="App">
      <div className="image-box">
        {isLoading && <div className="loading">Loading...</div>}
        {current && !isLoading ? (
          <div>
            <img src={current.picture} />
            <div className="content">
              <label>
                <b>{current.name}</b>
              </label>
              <br />
              <label>{current.email}</label>
              <br />
              <label>{current.cell}</label>
              <br />
            </div>
          </div>
        ) : (
          !isLoading && (
            <div className="loading">
              <center>No Data, Click on Next to get user</center>
            </div>
          )
        )}
      </div>
      <center>
        <button onClick={previous}>&lt;&lt; Previous</button>
        <button onClick={next}>Next &gt;&gt;</button>
      </center>
    </div>
  );
}

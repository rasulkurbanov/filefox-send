import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [files, setFiles] = useState(null);

  const onChangeHandler = (e) => {
    // console.log(e.target.files[0])
    setFiles(e.target.files[0]);
  };

  const onClickHandler = (e) => {
    const data = new FormData();
    data.append("file", files);
    axios
      .post("http://localhost:8000/upload", data)
      .then((response) => {
        console.log(response.statusText);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form method="post" action="#" id="#">
            <div className="form-group files color">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                multiple=""
                onChange={onChangeHandler}
              />
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onClickHandler}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

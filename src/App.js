import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [files, setFiles] = useState(null);

  const onChangeHandler = (e) => {
    console.log(e.target.files)
    
    setFiles(e.target.files);
  };

  const onClickHandler = (e) => {
    const data = new FormData();
    for(let i=0; i<files.length; i++) {
      data.append("file", files[i]);
    }

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
                multiple
                onChange={onChangeHandler}
              />
              <button
                type="button"
                className="btn btn-primary btn-block"
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

import React, { useState } from 'react'
import "./App.css";




function App() {
  const [ files, setFiles ] = useState(null)


  const onChangeHandler = (e) => {
    // console.log(e.target.files[0])
    setFiles(e.target.files[0])
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form method="post" action="#" id="#">
            <div className="form-group files color">
              <label>Upload Your File </label>
              <input type="file" className="form-control" multiple="" onChange={onChangeHandler}/>
              <button type="button" className="btn btn-success btn-block">Upload</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Form({getData}) {
  const [Weight, setweight] = useState("");
  const [Height, setheight] = useState("");
  const[alert,setalert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(Weight) || isNaN(Height)){
      console.log("Not a valid input")
      setalert(true);
    }else{ 
    getData(Weight,Height) 
    setalert(false);
    setheight("");
    setweight("");
  }
  };
 
  return (
   
      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg)</label>
                <input
                  type="text"
                  value={Weight}
                  onChange={(e) => setweight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(m)</label>
                <input
                  type="text"
                  value={Height}
                  onChange={(e) => setheight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="GET BMI"
          />
        </form>
        {alert===true? <div className="alert alert-danger" role="alert">Please Enter Valid Data</div> : null}
      </div>
    
  );
}

export default Form;

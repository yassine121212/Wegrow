import React,{ Children,useState,useEffect }  from "react";
 import "./competence.css";
 import axios from "axios";

 import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

 const AddCompetence=(props)=>{

  const [skillsList, setskillsList] = useState([{ skill: "" ,level: ""}]);
 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  
  const senddetails = async () => {
     setIsLoading(true);
 
  try {
    const id = localStorage.getItem("id");
     
    const url = "http://localhost:8080/api/users/det/";
      await axios.put(url + id,skillsList);
      
  
  
  } catch (error) {
    if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
    ) {
        setError(error.response.data.message);
    }
  }
  setIsLoading(false);
  
  }
const showdetails= async ()=>{
    setIsLoading(true);
 
  try {
    const id = localStorage.getItem("id");
     
    const url = "http://localhost:8080/api/users/det/";
    const det = await axios.get(url + id);
       if(det.status===200)
       {
         console.log(det)
         
         props.getDetails(det.data.comp)
         
         setskillsList(det.data.comp);

        }
    } catch (error) {
    if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
    )
     {
        setError(error.response.data.message);
    }
  }
  setIsLoading(false);
  
  }
 
  /*useEffect(() => {
    setresult (Object.keys(details).map(key => {
      console.log(key)
     console.log(key,details[key]); 
    return {[key]: details[key]};
  }));
  }, [details]);*/
 
  useEffect(() => {
    showdetails();
  },[]);
  const handleskillChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillsList];
    list[index][name] = value;
    setskillsList(list);
  };
  const handlelevelChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillsList];
    list[index][name] = value;
    setskillsList(list);
  };
  
  const handleskillRemove = (index) => {
    const list = [...skillsList];
    list.splice(index, 1);
    setskillsList(list);
  };

  const handleskillAdd = () => {
    setskillsList([...skillsList,{ skill: "",level: "" }]);
 
  };
  
   
  return ( 
    <>
  <button
    type="button"
    onClick={senddetails}
    className="add-btn"
  >
    <span>go</span>
  </button>     

    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="skill">skill(s)</label>
         
        
        {skillsList.map((singleskill, index) => (
          <div key={index} className="skills">
            <div className="first-division">
              <input
                name="skill"
                type="text"
                id="skill"
                value={singleskill.skill}
                onChange={(e) => handleskillChange(e, index)}
                required
              />
              <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={100}
                  name="level"
                  value={singleskill.level}
                  onChange={(e) => handlelevelChange(e, index)}
                  required
                />
               {skillsList.length - 1 === index && skillsList.length < 4 && (
                 <button
                  type="button"
                  onClick={handleskillAdd}
                  className="add-btn"
                >
                  <span>Add a skill</span>
                </button>

               
              )}
            </div>
            <div className="second-division">
              {skillsList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleskillRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {skillsList &&
          skillsList.map((singleskill, index) => (
            <ul key={index}>
              {singleskill.skill && <li>{singleskill.skill} : {singleskill.level} %</li>}
            </ul>
          ))}
           <h2>Output</h2>
 
         
      </div>
    </form>
    </>
  );
}

 export default AddCompetence;
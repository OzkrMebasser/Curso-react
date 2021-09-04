import React from "react";

//Styles
import "../styles/Form.css";

const Form = ({ setCategory, handleSearch, loading }) => {
  //----> props.setCategory
  //----> {setCategory} = props

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="input-news">
        <label htmlFor="category">Category</label>
        <select
          name=""
          id="category"
          placeholder="Category"
          onChange={handleCategory}
        >
          <option value="business" defaultValue>
            Business
          </option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className={loading ? "searching-button" : "search-button"}>
        <button onClick={handleSearch}>
          {loading ? "Serching..." : "Search !"}
        </button>
      </div>
    </>
  );
};

export default Form;

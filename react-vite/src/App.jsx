import { useEffect, useState } from "react";

// const debounce = (fn, delay = 1000) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

// const makeRequest = (value) => {
//   console.log("Sending request:", value);
// };

// const debounced = debounce(makeRequest, 1000);

const App = () => {
  console.log("re-render");
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
    // debounced(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Calling server API", value);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <>
      <h1>Welcome to JS</h1>
      <input type="text" onChange={handleChange} placeholder="search" />
      <h2>{value}</h2>
    </>
  );
};

export default App;

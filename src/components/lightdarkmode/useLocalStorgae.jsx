import React, { useEffect, useState } from "react";

const useLocalStorgae = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e.error);
      currentValue = defaultValue;
    }
    return currentValue
  });

  useEffect(()=>{

    localStorage.setItem(key, JSON.stringify(value))

  },[key,value])

  return  [value,setValue

];
};

export default useLocalStorgae;

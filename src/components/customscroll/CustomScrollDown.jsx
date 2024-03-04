import React, { useEffect, useState } from "react";

const CustomScrollDown = ({ url }) => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const fetchdata = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);

      const result = await response.json();

      //   if (result && result.products && result.products.lenth > 0) {
      //     setData(result.products);
      //     setLoading(false);
      //   }

      setData(result.products);
      setLoading(false);

      console.log("resulr", result.products);
    } catch (e) {
      console.log(e.error);
      setLoading(false);
    }
  };

  console.log("data", data);

  useEffect(() => {
    fetchdata(url);
  }, [url]);

  return (
    <>
      <div>
        <div>
          {data && data.length > 0 



            ? data.map((item) => {
                return (
                  <div key={item.id}>
                    <h3>{item.title}</h3>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CustomScrollDown;

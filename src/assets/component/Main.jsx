import { useEffect, useState } from "react";
import Card from "./Card";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://thronesapi.com/api/v2/characters");
      const result = await res.json();
      setData(result);
      console.log(result);
    };
    fetchdata();
  }, []);

  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="grid  w-5/6 sm:w-4/5 px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <Card
            key={item.id}
            url={item.imageUrl}
            firstName={item.firstName}
            lastName={item.lastName}
            tilte={item.title}
            family={item.family}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;

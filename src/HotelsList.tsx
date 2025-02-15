import { useEffect, useState } from "react";
import { IHotelData } from "./types/hotelCardTypes";
import HotelCard from "./components/HotelCard";
import { mockData } from "./api/hotelsAPI";
import SortSelector from "./components/SortSelector";

const HotelsList = () => {
  const [hotelsData, setHotelsData] = useState<IHotelData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await mockData();
        setHotelsData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
      <div>
        <span>{hotelsData.length}</span>
        <span> hotels in</span>
        <span className="font-bold"> Sydney</span>
        </div>
        <SortSelector hotelsData={hotelsData} setHotelsData={setHotelsData} />
      </div>

      {hotelsData.length > 0 ? (
        hotelsData.map((hotel) => {
          return <HotelCard key={hotel.id} data={hotel} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HotelsList;

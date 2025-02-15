import RatingComponent from "./RatingComponent";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { IHotelData } from "../types/hotelCardTypes";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

interface IHotelCardProps {
  data: IHotelData;
}

const HotelCard = ({ data }: IHotelCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        boxShadow: 3,
        m: 2,
        position: "relative",
      }}
    >
        <div className="absolute top-3 left-0 bg-white px-2 pb-0.5 rounded-br-lg rounded-tr-lg">
          <span className="text-xs font-bold bg-white text-rose-600">{data.offer.promotion.title}</span>
        </div>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 250 },
          height: "auto",
          objectFit: "cover",
        }}
        image={data.property.previewImage.url}
        alt={data.property.previewImage.caption}
        loading="lazy"
      />
      <Box
        className="text-left"
        sx={{ display: "flex", flexDirection: "column", flex: 1, p: 2 }}
      >
        <CardContent>
          <div className="card-body">
            <div className="flex gap-4 justify-start">
              <h2 className="card-title text-lg mb-4 font-bold">
                {data.property.title}
              </h2>
            </div>
            <div className="flex h-full gap-4 items-stretch justify-between text-left">
              <div className="flex flex-col h-full gap-4 items-stretch">
                <p>{data.property.address.join(", ")}</p>
                <div className="underline text-blue-800">
                  <a href="#" rel="noopener noreferrer">
                    {data.offer.name}
                  </a>
                </div>
                <div>
                  {data.offer.cancellationOption.cancellationType ==
                    "FREE_CANCELLATION" && (
                    <p className="text-green-600">Free cancellation</p>
                  )}
                </div>
                <RatingComponent
                  ratingValue={data.property.rating.ratingValue}
                  ratingType={data.property.rating.ratingType}
                />
              </div>
              <div className="flex flex-col items-end justify-end">
                <p className="text-xs mb-2">
                <strong>1</strong> night total{" "}
                  <strong>({data.offer.displayPrice.currency})</strong>
                </p>
                  <div
                    className={`flex justify-start ${
                      data.offer.savings ? "text-green-600" : "text-blue-800"
                    }`}
                  >
                    <div>
                      <PiCurrencyDollarLight />
                    </div>
                    <span className="w-fit text-xl">
                      {data.offer.displayPrice.amount}
                    </span>
                  </div>
                  {data.offer.savings && (
                    <div className="flex items-center text-rose-600">
                      <p>Save</p>
                      <div>
                        <PiCurrencyDollarLight />
                      </div>
                      <span className="text-lg">
                        {data.offer.savings.amount}
                      </span>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HotelCard;

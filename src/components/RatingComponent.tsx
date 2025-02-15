import { IRating } from "../types/hotelCardTypes";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';



const RatingComponent = ({ ratingValue, ratingType }: IRating) => {
  return (
    <div className="mt-4">
      {ratingType == "self" ? (
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Rating
            name="read-only"
            value={ratingValue}
            readOnly
            precision={0.5}
            icon={<CircleIcon className="w-[20px]" fontSize="inherit" />}
            emptyIcon={<RadioButtonUncheckedIcon className="w-[20px]" fontSize="inherit" />}
          />
        </Box>
      ) : (

        <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating name="read-only" value={ratingValue} readOnly precision={0.1}  />
      </Box>
      )}
    </div>
  );
};

export default RatingComponent;

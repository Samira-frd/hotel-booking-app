import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { IHotelData } from "../types/hotelCardTypes";

interface ISortSelectorProps {
  hotelsData: IHotelData[];
  setHotelsData: (data: IHotelData[]) => void;
}

function SortSelector({ hotelsData, setHotelsData }: ISortSelectorProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortCards = (type: string) => {
    const sortedData = [...hotelsData].sort((a, b) =>
      type === "low"
        ? a.offer.displayPrice.amount - b.offer.displayPrice.amount
        : b.offer.displayPrice.amount - a.offer.displayPrice.amount
    );
    setHotelsData(sortedData);
  };

  return (
    <div>
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="borer-2 border-gray-300 border-solid"
        >
          <SwapVertIcon />
          <p>Sort By</p>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              sortCards("low");
            }}
            className="p-0"
          >
          <ArrowDownwardIcon fontSize={"small"}/>
            <p className="text-sm ml-1">Price low-high</p>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            onClick={() => {
              handleClose();
              sortCards("high");
            }}
          >
            <ArrowUpwardIcon fontSize={"small"}/>
            <p className="text-sm ml-1">Price high-low</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default SortSelector;

import {
  AiOutlineStar,
  AiOutlineFire,
  AiOutlineFieldTime,
} from "react-icons/ai";

export const navigation = [
  {
    pathname: "/trending",
    display: "Trending Now",
    icon: AiOutlineFire,
  },
  {
    pathname: "/upcoming",
    display: "Upcoming",
    icon: AiOutlineFieldTime,
  },
  {
    pathname: "/top_rated",
    display: "Top Rated",
    icon: AiOutlineStar,
  },
];

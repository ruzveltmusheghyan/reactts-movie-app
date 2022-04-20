import { nanoid } from "nanoid";
import { IconType } from "react-icons";
import {
  AiOutlineStar,
  AiOutlineFire,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { Link } from "react-router-dom";
type navigation = {
  pathname: string;
  display: string;
  icon: IconType;
};

const list: navigation[] = [
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

interface Props {
  pathname: string;
}
export const Navigation: React.FC<Props> = ({ pathname }) => {
  return (
    <>
      {list.map((el) => {
        return (
          <nav>
            <Link key={nanoid()} to={el.pathname}>
              <span
                className={`filter__button flex align-center justify-center ${
                  pathname === el.pathname
                    ? "active"
                    : "" ||
                      (pathname === "/" && el.pathname === "/trending"
                        ? "active"
                        : "")
                }`}
              >
                {<el.icon size={20} />} {el.display}
              </span>
            </Link>
          </nav>
        );
      })}
    </>
  );
};

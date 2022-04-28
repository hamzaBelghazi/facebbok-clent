import React from "react";
import { SideNav } from "./SideNav";
import img from "../../assets/main.png";
import imgs from "./imgs";
import { Footer } from "../footer/Footer";
import { useContext, useState, useEffect } from "react";
import authContext from "../../store/authStore";

const DUMY_LIST_NAVIGATION = [
  {
    link: "/",
    imgSrc:
      "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeFxt3PwuUAf32_uBlctjZzvqfpKmA4GtxSp-kqYDga3FCSpxDGsAVqeTzK_vz0kSLSfZD5UWQ_E8MENW-cwTsZv",
    label: "Friends",
  },
  {
    link: "/",
    imgSrc:
      "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFeAizBK2FgPqIBZTYJjg6vtEPFOzh_t-u0Q8U7OH-36_aG-upGAou4Ph0h6ugdPSdmj1i2HZB3GAsBY4mUN2k6",
    label: "Pages",
  },
  {
    link: "/",
    imgSrc:
      "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeFWHVrS4CL_G6My6qkO0ZzwZ3xAUM5_bWpnfEBQzn9tany6gk03jLR6MWmPem9AZM7sM7W36bkTvsz68wz27w7w",
    label: "Groups",
  },
  {
    link: "/",
    imgSrc:
      "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeESMSaVXwZt8QpEYW-EDJy_-vsl1K9A-9v6-yXUr0D72_i-32hxkpYF6Ldigba4XoMAgYA9pzsqPJ7SRs7yHkpG",
    label: "Marketplace",
  },
  {
    link: "/",
    imgSrc:
      "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeFSvbpFk3jGxYfYc_jfW9uQ2NRDTXGHJ53Y1ENNcYcnnT-lFdYTgxRSYp2F_WxIvODTrEupZs-zraMlhHTznSON",
    label: "Watch",
  },
];
const DUMY_LIST_SHURTS = [
  {
    link: "/",
    imgSrc: imgs[0],
    label: "8 Ball Pool",
  },
  {
    link: "/",
    imgSrc: imgs[0],
    label: "Javascript",
  },
  {
    link: "/",
    imgSrc: imgs[1],
    label: "NodeJS",
  },
  {
    link: "/",
    imgSrc: imgs[2],
    label: "HTML5",
  },
  {
    link: "/",
    imgSrc: imgs[3],
    label: "Css3",
  },
];

function SideBarLeft() {
  const { user } = useContext(authContext);
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const curUser = {
      link: `/user/${user.id}`,
      imgSrc: `http://localhost:3001/uploads/user/${user.avatar}`,
      label: `${user.firstName} ${user.lastName}`,
    };
    setNavList([curUser, ...DUMY_LIST_NAVIGATION]);
  }, [user]);

  console.log(navList);

  return (
    <aside className="sidbar--left">
      <section className="navigation">
        <SideNav items={navList} />
        <ul>
          <li>
            <a href="/">
              <span className="see_more">
                <svg viewBox="0 0 16 16" width="1em" height="1em">
                  <g fill-rule="evenodd" transform="translate(-448 -544)">
                    <path
                      fill-rule="nonzero"
                      d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span>See more</span>
            </a>
          </li>
        </ul>
      </section>
      <div className="spirator"></div>
      <section className="shortcuts">
        <div className="short_head">
          <h1>Your shortcuts</h1>
          <a href="/" className="edit">
            Edit
          </a>
        </div>
        <SideNav items={DUMY_LIST_SHURTS} />
      </section>
      <Footer />
    </aside>
  );
}

export default SideBarLeft;

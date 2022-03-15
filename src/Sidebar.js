import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import QueueIcon from "@material-ui/icons/Queue";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import React from "react";
import SidebarRow from "./SidebarRow.js";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeRoundedIcon} title="Home" />
      <SidebarRow Icon={SportsBasketballIcon} title="Cultures" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Rooms" />
      <SidebarRow Icon={QueueIcon} title="Playlist" />

      <hr />
      <h5>Recommanded Rooms</h5>
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s900-c-k-c0x00ffffff-no-rj"
        title="Code with Harry"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Clever Programmer"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s176-c-k-c0x00ffffff-no-rj-mo"
        title="WebDevSimplified"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="join"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="join"
      />
      <SidebarRow Icon={ExpandMoreIcon} title="See more" />
      <hr />
      <h5>Recommanded Creators</h5>
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="Room"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="Room"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="Room"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
      />
      <SidebarRow
        Icon={Avatar}
        src="https://yt3.ggpht.com/ytc/AKedOLSsCXT1qiEEeZy4xc5bFdSUmweeh-krAMaPFCM4=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Finlight"
        button="Room"
      />
      

      <SidebarRow Icon={ExpandMoreIcon} title="See more" />
    </div>
  );
};

export default Sidebar;

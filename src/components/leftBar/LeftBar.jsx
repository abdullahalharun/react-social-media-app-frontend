import "./leftBar.scss";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import {
  GroupOutlined,
  MemoryOutlined,
  MovieOutlined,
  OndemandVideoOutlined,
  StoreOutlined,
  TimerOutlined,
  Watch,
  WatchOutlined,
} from "@mui/icons-material";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
              alt="Profile"
            />
            <span>Harun</span>
          </div>
          <div className="item">
            <GroupOutlined />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlined />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <GroupOutlined />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <GroupOutlined />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined />
            <span>Watch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

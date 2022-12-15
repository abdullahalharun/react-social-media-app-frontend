import "./leftBar.scss";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import {
  GroupOutlined,
  OndemandVideoOutlined,
  StoreOutlined,
  TimerOutlined,
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
            <GroupOutlined className="icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon className="icon" />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined className="icon" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined className="icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlined className="icon" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <GroupOutlined className="icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon className="icon" />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined className="icon" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined className="icon" />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <GroupOutlined className="icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon className="icon" />
            <span>Group</span>
          </div>
          <div className="item">
            <StoreOutlined className="icon" />
            <span>MarketPlace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlined className="icon" />
            <span>Watch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

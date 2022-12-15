import "./profile.scss";
import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Place,
  Twitter,
} from "@mui/icons-material";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbXxo5smd56BGOvIKRCj83mnR_jF1SWWw6Q&usqp=CAU"
          alt=""
          className="cover"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="https://instagram.com">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com">
              <Twitter fontSize="large" />
            </a>
            <a href="https://linkedin.com">
              <LinkedIn fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Abdullah Musafir</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>Bangladesh</span>
              </div>
              <div className="item">
                <Language />
                <span>harun.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

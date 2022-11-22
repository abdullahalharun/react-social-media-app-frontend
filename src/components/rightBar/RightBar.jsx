import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For Your</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <span>Harun</span>
            </div>
            <div className="buttons">
              <button className="follow">follow</button>
              <button className="dissmiss">dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <span>Harun</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <p>
                <span>Harun</span>
                Changed their cover picture
              </p>
              <p>1 min ago</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <p>
                <span>Harun</span>
                Changed their cover picture
              </p>
              <p>1 min ago</p>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <div className="online" />
              <span>Harun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <div className="online" />
              <span>Harun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <div className="online" />
              <span>Harun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <div className="online" />
              <span>Harun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s3.envato.com/files/247731702/MAS_1112.jpg"
                alt="Profile"
              />
              <div className="online" />
              <span>Harun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

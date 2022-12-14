import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // Temporary data
  const stories = [
    {
      id: 1,
      name: "Abdullah Musafir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSPWJFXGxbXOawTRsrEaI4wQ3J8uCDjOKlQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Abdullah Musafir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU",
    },
    {
      id: 3,
      name: "Abdullah Musafir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbXxo5smd56BGOvIKRCj83mnR_jF1SWWw6Q&usqp=CAU",
    },
    {
      id: 4,
      name: "Abdullah Musafir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSPWJFXGxbXOawTRsrEaI4wQ3J8uCDjOKlQ&usqp=CAU",
    },
    // {
    //   id: 5,
    //   name: "Abdullah Musafir",
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbXxo5smd56BGOvIKRCj83mnR_jF1SWWw6Q&usqp=CAU",
    // },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;

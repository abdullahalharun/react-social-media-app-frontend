import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  // Temporary
  const posts = [
    {
      id: 1,
      name: "Abdullah Musafir",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti assumenda architecto eum eligendi illo iure repellendus maiores vero debitis quis sunt, adipisci placeat mollitia cum minus natus! Quibusdam, praesentium.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbXxo5smd56BGOvIKRCj83mnR_jF1SWWw6Q&usqp=CAU",
    },
    {
      id: 2,
      name: "Umme Abdullah",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui deleniti assumenda architecto eum eligendi illo iure repellendus maiores vero debitis quis sunt, adipisci placeat mollitia cum minus natus! Quibusdam, praesentium.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

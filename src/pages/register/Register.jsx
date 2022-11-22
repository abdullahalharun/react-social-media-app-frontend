import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Fleet Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            omnis sunt culpa assumenda molestias impedit corrupti fugit maiores
            vel deserunt, quod, exercitationem mollitia ducimus, itaque autem
            quos animi tempora inventore?
          </p>
          <span>Have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

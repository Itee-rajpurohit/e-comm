import {useState} from "react";
import { useDispatch } from "react-redux";
import { loginController } from "../../services/auth.api";
import { setLogin } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault(); //Oprevents the browser’s default behavior for an event, such as preventing a form from reloading the page on submit.
    try {
        let data = await loginController(formData);
        console.log("User API Called!")
        dispatch(setLogin({
                user: data.user,
                token: data.token,
                role:data.role
        }))
        console.log("Data aagya", data)
        if (data.role === "admin") {
      navigate("/products");
    } else {
      navigate("/");
    }

    } catch (error) {
        alert(error.response?.data?.message || "Login Failed!")
    }
  }

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">

    <div className="bg-white p-8 rounded-2xl shadow-md w-96">

      <h2 className="text-2xl font-bold text-center mb-6">
        Login
      </h2>
      <h2 className="text-sm text-red-500  text-center mb-6">
        ADMIN CREDENTIALS- email:admin@example.com | password:1234
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

      </form>
    </div>
  </div>
);
};

export default Login;

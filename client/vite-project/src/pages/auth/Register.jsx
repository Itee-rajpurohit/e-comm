import { useState } from 'react'
import { registerController } from '../../services/auth.api'
import { setLogin } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {

    const dispatch = useDispatch(); //Tell Redux to change something.
/*Visual Flow

Component
⬇
dispatch(action)
⬇
Reducer
⬇
Store updated
⬇
All components re-render*/

    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        try {
            console.log("Chala")
            let data = await registerController(formData);
            console.log(data)
            alert("Registered Successfully");
            dispatch(setLogin({
                user: data.user,
                token: data.token,
                role:data.role
            }));
        } catch (error) {
            alert(error.response?.data?.message || "Registration Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow-md w-96">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

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
                        Register
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Register
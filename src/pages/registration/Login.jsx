/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async () => {
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("You're logged in!");
          setLoading(false);
          if (user.role === "user") {
            navigate("/");
          } else {
            navigate("/");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_Form bg-green-50 px-8 py-6 border border-green-100 rounded-xl shadow-md">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-green-500 ">
            Login
          </h2>
          <p className="font-semibold">Demo Accounts:</p>
          <p>Admin: admin@gmail.com</p>
          <p>User: user@gmail.com</p>
          <p>Password for both: 123456</p>
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
            className="bg-green-50 border border-green-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
            className="bg-green-50 border border-green-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
          />
        </div>

        <div className="mb-5">
          <button
            type="button"
            onClick={userLoginFunction}
            className="bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Login
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Don't have an account?{" "}
            <Link className=" text-green-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;

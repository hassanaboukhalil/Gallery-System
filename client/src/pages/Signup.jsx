import { useState } from "react";
import Input from "../components/others/Input";
import { Link } from "react-router-dom";
import Button from "../components/others/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let protocol = "http://";
let host = "localhost:8080";
let path = "/gallery-system/server/signup";

const url = protocol + host + path;

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validate_password(pass)) {
      alert(
        "Your Password should contain letters, numbers and should contain more than 7 characters"
      );
      return;
    }
    const form = new FormData();

    form.append("first_name", capitalize_first_letter(firstName));
    form.append("last_name", capitalize_first_letter(lastName));
    form.append("email", email);
    form.append("pass", pass);

    try {
      const response = await axios.post(url, form);
      if (response.data.isSuccess) {
        localStorage.setItem("id", response.data.user.id);
        localStorage.setItem("first_name", response.data.user.first_name);
        navigate("/Home");
      } else {
        console.log("Signup failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  function capitalize_first_letter(str) {
    str = str[0].toUpperCase() + str.slice(1, str.length);
    return str;
  }

  function validate_password(pass) {
    let contains_nb = false;
    let contains_letter = false;
    if (pass.length < 8) {
      return false;
    }

    for (let i = 0; i < pass.length; i++) {
      if ("1234567890".includes(pass[i])) {
        contains_nb = true;
      } else if (
        "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm".includes(pass[i])
      ) {
        contains_letter = true;
      }
    }

    return contains_nb && contains_letter;
  }

  return (
    <section className="container login_signup_section">
      <form className="bg-primary body2">
        <h2 className="text-white h2">Sign Up</h2>
        <Input
          type={"text"}
          name={"first_name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={"First Name"}
          classes={"body1"}
        />
        <Input
          type={"text"}
          name={"last_name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={"Last Name"}
          classes={"body1"}
        />
        <Input
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email"}
          classes={"body1"}
        />
        <Input
          type={"password"}
          name={"pass"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={"Password"}
          classes={"body1"}
        />
        <Button
          text={"Sign up"}
          onClick={handleSignup}
          classes={"bg-secondary text-black w-full"}
        />
        <p className="body2 text-white">
          Don't have account ?{" "}
          <span className="text-secondary">
            <Link to={"/login"} value="Login">
              Login
            </Link>
          </span>
        </p>
      </form>
    </section>
  );
};
export default Signup;

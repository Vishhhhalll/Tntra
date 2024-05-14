import useLogin from "./useLogin";
import "./Login.css";

const Login = () => {
  const [
    { firstName, password },
    { validateForm, handlClickPassword, handleCLickFirstname },
  ] = useLogin();

  return (
    <>
      <div className="wrapper signIn">
        <div className="illustration">
          <img src="https://source.unsplash.com/random" alt="illustration" />
        </div>
        <div className="form">
          <div className="heading">LOGIN</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => handleCLickFirstname(e)}
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => handlClickPassword(e)}
                id="e-mail"
                placeholder="Enter you Password"
              />
            </div>
            <button
              onClick={() => {
                validateForm();
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

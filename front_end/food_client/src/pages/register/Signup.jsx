import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { AuthContext } from '../../contexts/AuthProvider';

function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { createUser, login, } = useContext(AuthContext)

  // Rediraation to home page or Specifig page
  const location = useLocation()
  const navigation = useNavigate()
  const from = location.state?.from?.pathname || "/"

  // create user
  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    createUser(email, password).then((res) => {
      const user = res.user
      alert("Account creation successfully done!")
      document.getElementById("my_modal_5").close()
      navigation(from, { relative: true })
    }).catch((error) => {
      const errorCode = error.errorCode
      const errorMesage = error.message
    })
  };
  return (
    <div className="max-w-md bg-white shadow mx-auto my-20 flex items-center justify-center">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
          <h3 className="font-bold text-lg">Create An Account!</h3>
          {/** email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
          </div>
          {/** password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          {/* login btn */}
          <div className="form-control mt-6">
            <input type="submit" value="Signup" className="btn bg-green text-white" />
          </div>
          <p className="text-center my-2">
            Have an account?{" "}
            <Link
              to={"/"}
              className="underline text-red ml-1">
              Login
            </Link>
          </p>
        </form>
        {/* social sign in */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white" >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  )
}

export default Signup
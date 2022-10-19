import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/loginSlice";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  // console.log(errors);
  const navigate = useNavigate();

  let password = watch("password");
  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
  };
  // console.log(errors);
  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.container}`}
    >
      <div className={`card p-5 ${styles.formContainer} shadow-lg rounded-3`}>
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-md-6">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              control={control}
              type="text"
              className={`form-control ${errors?.userName && "is-invalid"}`}
              id="userName"
              {...register("userName", {
                required: { message: "User Name is required", value: true },
              })}
            />
            {errors?.userName?.type === "required" && (
              <span className="invalid-feedback">
                {errors?.userName?.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              control={control}
              type="email"
              className={`form-control ${errors?.email && "is-invalid"}`}
              {...register("email", {
                required: { message: "Email is required", value: true },
              })}
            />
            {errors?.email?.type === "required" && (
              <span className="invalid-feedback">{errors?.email?.message}</span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors?.password && "is-invalid"}`}
              id="password"
              {...register("password", {
                required: { message: "Password is required", value: true },
              })}
            />
            {errors?.password?.type === "required" && (
              <span className="invalid-feedback">
                {errors?.password?.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label
              htmlFor="confirmPassword"
              className="form-label
          "
            >
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${
                errors?.confirmPassword && "is-invalid"
              }`}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  message: "confrim Password is required",
                  value: true,
                },
                validate: (value) => {
                  return value === password || "Password does not match";
                },
              })}
            />
            {errors?.confirmPassword?.type === "required" && (
              <span className="invalid-feedback">
                {errors?.confirmPassword?.message}
              </span>
            )}
            {errors?.confirmPassword?.type === "validate" && (
              <div className="invalid-feedback">No Match</div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer04" className="form-label">
              State
            </label>
            <select
              className={`form-select ${errors?.agree && "is-invalid"}`}
              id="select"
              aria-describedby="selectFeedback"
              {...register("state", { required: true })}
              defaultValue=""
            >
              <option value="" disabled></option>
              <option value="egypt">Egypt</option>
              <option value="united states">USA</option>
            </select>
            <div id="selectFeedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-12">
            <div className={`form-check ${errors?.agree && "is-invalid"}`}>
              <input
                className={`form-check-input ${errors?.agree && "is-invalid"}`}
                type="checkbox"
                id="checkBox"
                // aria-describedby="invalidCheck3Feedback"
                {...register("agree", {
                  required: { message: "Checkbox is required", value: true },
                })}
              />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              {errors?.agree?.type === "required" && (
                <span className="invalid-feedback">
                  You must agree before submitting.
                </span>
              )}
            </div>
          </div>
          <input className="btn btn-outline-dark" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;

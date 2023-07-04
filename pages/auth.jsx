import InputWithValidation from "@/Components/InputWithValidation/InputWithValidation";
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";
import React, { useState } from "react";
import { useAuthContext } from "../Context/authData.js";
import Fade from "react-reveal/Fade";
import Head from "next/head.js";

export default function Auth() {
  const {
    SignUp,
    signUpRes,
    setSignUpRes,

    SignIn,
    isLogged,
    signInRes,
    setSignInRes,

    isLoading,
  } = useAuthContext();

  async function handleSignUp(values) {
    setSignUpRes(null);
    await SignUp(values);
    values.firstName = "";
    values.lastName = "";
    values.userName = "";
    values.email = "";
    values.password = "";
  }
  async function handleSignIn(values) {
    setSignInRes(null);
    await SignIn(values);
    values.email = "";
    values.password = "";
  }

  let registrationSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    userName: string()
      .required("User name is required")
      .max(15, "Max Length 15 Characters"),
    email: string()
      .email()
      .required("Email address is required")
      .matches(/^\S+@\S+\.\S+$/, "Invalid Email Address"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
  let signInSchema = object({
    email: string().email().required("Email address is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
  return (
    <>
      <Head>
        <title>Account</title>
        <meta
          name="description"
          content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container-fluid authbg p-0">
        <div className="row justify-content-center align-items-center vh-100 m-0 overlay">
          <div className="col-md-4 col-sm-8 col-12 text-light shadow p-5 bg-black bg-opacity-25 rounded-5">
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active fw-bolder title"
                  id="tab-login"
                  data-mdb-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link fw-bolder title"
                  id="tab-register"
                  data-mdb-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>

            <Fade>
              {" "}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={signInSchema}
                    onSubmit={(values) => {
                      handleSignIn(values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                          <p className="text-light">Sign in with</p>
                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                        {signInRes &&
                          (signInRes.success ? null : (
                            <h2 className="text-center bg-danger rounded-3 bg-opacity-50 h6 p-1 mb-3">
                              {signInRes.message}
                            </h2>
                          ))}
                        <InputWithValidation
                          name="email"
                          label="Email Address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email}
                          touched={touched.email}
                        />
                        <InputWithValidation
                          name="password"
                          label="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.password}
                          touched={touched.password}
                          inputType={"password"}
                        />

                        <div className="row mb-4">
                          <div className="col-md-6 d-flex justify-content-center">
                            <div className="form-check mb-3 mb-md-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="loginCheck"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="loginCheck"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6 d-flex justify-content-center ">
                            <a href="#!" className="text-light">
                              Forgot password?
                            </a>
                          </div>
                        </div>

                        {isLoading ? (
                          <button
                            type="submit"
                            disabled
                            className="btn btn-outline-light fw-bolder fs-6 btn-block border-1 mb-4"
                          >
                            <i className="fa-solid fa-spinner fa-spin"></i>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-outline-light fw-bolder fs-6 btn-block border-1 mb-4"
                          >
                            Sign In
                          </button>
                        )}
                      </form>
                    )}
                  </Formik>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      userName: "",
                      email: "",
                      password: "",
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={(values) => {
                      handleSignUp(values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                          <p className="text-light">Sign in with</p>
                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-floating mx-1"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </div>

                        {signUpRes &&
                          (signUpRes.success ? (
                            <h2 className="text-center bg-success rounded-3 bg-opacity-50 h6 p-1 mb-3">
                              {signUpRes.message}
                            </h2>
                          ) : (
                            <h2 className="text-center bg-danger rounded-3 bg-opacity-50 h6 p-1 mb-3">
                              {signUpRes.message}
                            </h2>
                          ))}
                        <InputWithValidation
                          name="firstName"
                          label="First Name"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.firstName}
                          touched={touched.firstName}
                        />
                        <InputWithValidation
                          name="lastName"
                          label="Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.lastName}
                          touched={touched.lastName}
                        />
                        <InputWithValidation
                          name="userName"
                          label="User Name (Display Name)"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.userName}
                          touched={touched.userName}
                        />
                        <InputWithValidation
                          name="email"
                          label="Email Address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email}
                          touched={touched.email}
                        />
                        <InputWithValidation
                          name="password"
                          label="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.password}
                          touched={touched.password}
                          inputType={"password"}
                        />
                        <div className="row mb-4">
                          <div className="col-md-6 d-flex justify-content-center">
                            <div className="form-check mb-3 mb-md-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="loginCheck"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="loginCheck"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6 d-flex justify-content-center ">
                            <a href="#!" className="text-light">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        {isLoading ? (
                          <button
                            type="submit"
                            disabled
                            className="btn btn-outline-light fw-bolder fs-6 btn-block border-1 mb-4"
                          >
                            <i className="fa-solid fa-spinner fa-spin"></i>
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn btn-outline-light fw-bolder fs-6 btn-block border-1 mb-4"
                          >
                            Sign Up
                          </button>
                        )}
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

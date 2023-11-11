import { Formik, useField } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import useClickOutSide from "../../hooks/useClickOutSide";
const data = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];

const RegisterFomikDefault = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Select your job");

  const handleClickDropdownItem = (e) => {
    // const [field] = useField("job");
    console.log(e.target.dataset.value);
    setShow(false);
    setLabel(e.target.innerText);
    //    setValue(name, e.target.dataset.value);
    //    //khi sự kiện onclick nó sẽ trả  giá trị của data-value về
    //    setShow(false);
    //    setLabel(e.target.textContent);
  };
  return (
    <Formik
      initialValues={{
        //các field name
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Please enter valid email address")
          .required("Please enter your email address"),
        password: yup
          .string()
          .min(8, "Your password must be at least 8 characters or greater")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
            }
          )
          .required("Please enter your password"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        // job: yup
        //   .string()
        //   .required("Please select your job")
        //   .oneOf(["teacher", "developer", "doctor", "constructor"]),
        term: yup
          .boolean()
          .oneOf([true], "Please check the term and conditions"), //chỉ true
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log("value", JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[300px] mx-auto my-10"
        >
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="username" className="cursor-pointer">
              Username
            </label>
            <input
              id="username"
              type="text"
              //   name="username"
              placeholder="Enter your username"
              className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-sm text-red-500">{formik.errors.username}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              id="email"
              type="text"
              // name="email"
              placeholder="Enter your email"
              className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="cursor-pointer">
              Password
            </label>
            <input
              id="password"
              type="password"
              //   name="password"
              placeholder="Enter your password"
              className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="">Gender</label>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-x-3">
                <label className="cursor-pointer custom-radio">
                  <input
                    type="radio"
                    value="male"
                    className="hidden"
                    name="gender"
                    defaultChecked={formik.values.gender === "male"}
                    onChange={(e) => {
                      e.target.checked = true;
                      formik.setFieldValue(e.target.name, "male");
                    }}
                    // {...formik.getFieldProps("gender")}
                  />
                  <div className="w-full h-full bg-white rounded-full"></div>
                </label>
                <span>Male</span>
              </div>
              <div className="flex items-center gap-x-3">
                <label className="cursor-pointer custom-radio">
                  <input
                    type="radio"
                    value="female"
                    className="hidden"
                    name="gender"
                    onChange={(e) => {
                      e.target.checked = true;
                      formik.setFieldValue(e.target.name, "female");
                    }}
                    // {...formik.getFieldProps("gender")}
                  />
                  <div className="w-full h-full bg-white rounded-full"></div>
                </label>
                <span>Female</span>
              </div>
            </div>
            <p className="text-sm text-red-500">{formik.values.male}</p>
            {formik.touched.gender && formik.errors.gender && (
              <p className="text-sm text-red-500">{formik.errors.gender}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="job">Are you</label>
            <select
              id="job"
              // name="job"
              label="select your job"
              className="p-4 rounded-md border border-gray-100"
              {...formik.getFieldProps("job")}
            >
              {/* <option value="">Select your job</option> */}
              <option value="frontend">frontend</option>
              <option value="backend">backtend</option>
              <option value="fullstack">fullstack</option>
            </select>
            {formik.touched.job && formik.errors.job && (
              <p className="text-sm text-red-500">{formik.errors.job}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label className="cursor-pointer custom-checkbox">
              <input
                type="checkbox"
                className="hidden"
                id="term"
                checked={formik.values.term}
                {...formik.getFieldProps("term")}
              />
              <div className="flex items-center gap-x-3">
                <div className="flex items-center justify-center w-full h-full transition-all bg-white rounded-md custom-checkbox-square">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <label htmlFor="term" className="text-sm cursor-pointer">
                  I accept the term
                </label>
              </div>
              {formik.touched.term && formik.errors.term && (
                <p className="text-sm text-red-500">{formik.errors.term}</p>
              )}
            </label>
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
          >
            {formik.isSubmitting ? (
              <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFomikDefault;

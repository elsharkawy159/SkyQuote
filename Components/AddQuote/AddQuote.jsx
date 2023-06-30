import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import InputWithValidation from "../InputWithValidation/InputWithValidation.jsx";
import { useQuoteContext } from "../../Context/quoteData.js";
import { object, string } from "yup";

export default function AddQuote() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const userID = JSON.parse(localStorage.getItem("UserData"))?._id;
  const { addQuote, quoteRes, setQuoteRes, isLoading } = useQuoteContext();

  const handleAddQuote = async (values) => {
    await addQuote(values);
    values.title = "";
    values.description = "";
    setTimeout(() => {
      setQuoteRes("");
    }, 3000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let quoteSchema = object({
    title: string()
      .required("Title is required")
      .min(3, "Minimum Length is 3")
      .max(30, "Maximum Length is 30"),
    description: string()
      .required("Description is required")
      .matches(/^(?!.*([a-zA-Z])\1{3,}).*$/, "Description contains spam input")
      .min(10, "Minimum Length is 10")
      .max(160, "Maximum Length is 160"),
  });

  return (
    <div>
      <button
        className="btn btn-primary my-2 fw-bold fs-6 mx-4"
        onClick={handleClickOpen}
      >
        Add Quote
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="container-fluid p-0 shadow"
      >
        <div className="row m-0 bg-dark">
          <div className="col-md-12 col-sm-8 col-12 text-light shadow p-5 rounded-5">
            <div className="tab-content">
              <Formik
                initialValues={{
                  author: userID,
                  title: "",
                  description: "",
                }}
                validationSchema={quoteSchema}
                onSubmit={(values) => {
                  handleAddQuote(values);
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
                  <form onSubmit={handleSubmit} className="row">
                    <h2 className="title text-center mb-3">ADD QUOTE</h2>
                    {quoteRes &&
                      (quoteRes.success ? (
                        <h2 className="text-center bg-success rounded-3 bg-opacity-50 h6 p-1 mb-3">
                          {quoteRes.message}
                        </h2>
                      ) : (
                        <h2 className="text-center bg-danger rounded-3 bg-opacity-50 h6 p-1 mb-3">
                          {quoteRes.message}
                        </h2>
                      ))}
                    <InputWithValidation
                      name="title"
                      label="Quote Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.title}
                      touched={touched.title}
                      maxlength={30}
                    />
                    <InputWithValidation
                      name="description"
                      label="Description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.description}
                      touched={touched.description}
                      maxlength={160}
                    />

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
                        Add Quote
                      </button>
                    )}
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

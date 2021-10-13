import React, { Component } from "react";
import { Formik } from "formik";

const MyFormic = () => {
  return (
    <Formik>
      {() => (
        <div>
          <h1>My form</h1>
          <form>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'></input>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default MyFormic;

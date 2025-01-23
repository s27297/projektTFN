'use client'

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function AddPost(){
    const {postRequests}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    header: "",
                    text: "",
                }}
                validationSchema={Yup.object({

                    header: Yup.string()
                        .required("Header jest wymagany"),
                    text: Yup.string()
                        .required("Text jest wymagany"),


                })}
                onSubmit={(values, {resetForm}) => {


                    // console.log(values)
                    postRequests("Post",values)
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>

                        <Field type="text" name="header" placeholder="napisz header"
                        />
                        <ErrorMessage name="header" component="div"/>
                        <br/>
                        <Field type="text" name="text" placeholder="napisz text"
                        />
                        <ErrorMessage name="text" component="div"/>
                        <br/>
                        <button type="submit" disabled={!dirty || !isValid}
                        >Add new post
                        </button>
                    </Form>)}

            </Formik>
        </div>
    )

}
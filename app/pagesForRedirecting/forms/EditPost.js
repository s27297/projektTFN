
'use client'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";
// import {metadata as editCommit} from "@/app/layout";


export default function EditPost() {
    const {putRequests,editPost}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    header:editPost.header,
                    text:   editPost.text,

                }}
                validationSchema={Yup.object({
                    text:Yup.string().required(true,"nie moze byc pusty")
                        .min(3,"musi byc wiekszy od 2 znakow"),
                    header:Yup.string().required(true,"nie moze byc pusty")
                        .min(3,"musi byc wiekszy od 2 znakow"),


                })}
                onSubmit={(values, {resetForm}) => {
                    // console.log(values)
                    putRequests("post",{...values,id:editPost._id})
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>

                        Header
                        <Field type="text" name="header" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="header" component="div"/>
                        <br/>
                        Text
                        <Field type="text" name="text" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="text" component="div"/>
                        <br/>


                        <button style={{border: "1px solid black", backgroundColor: "white", padding: "10px"}}
                                type="submit" disabled={!isValid}
                        >Edit
                        </button>
                    </Form>)}

            </Formik>
        </div>
    )
}
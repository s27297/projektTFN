'use client'

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function AddEvent() {
    const {postRequests}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    name:"",
                    date:"" ,
                    text:""

                }}
                validationSchema={Yup.object({


                    name: Yup.string()
                        .required("Name jest wymagany")
                        .min(3,"Name musi miec co najmniej 3 znaki"),
                    text:Yup.string()
                        .required("opis eventa jest wymagany")
                        .min(3,"opis eventa musi miec co najmniej 3 znaki"),
                    date:Yup.date().required("data jest wymagana"),


                })}
                onSubmit={(values, {resetForm}) => {


                    // console.log(values)
                    postRequests("Event",values)
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>
                        Name
                        <Field type="text" name="name" placeholder="napisz nazwe eventa"
                        />
                        <ErrorMessage name="name" component="div"/>
                        <br/>
                        Opis eventa
                        <Field type="text" name="text" placeholder="napisz nazwe opis eventa"
                        />
                        <ErrorMessage name="text" component="div"/>
                        <br/>
                        Data
                        <Field type="datetime-local" name="date" placeholder="napisz nazwe groupy"
                        />
                        <ErrorMessage name="date" component="div"/>
                        <button type="submit" disabled={!dirty || !isValid}
                        >Add new event
                        </button>
                    </Form>)}

            </Formik>
        </div>
    )

}
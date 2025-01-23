
'use client'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";


export default function EditUserProfile() {
    const {putRequests,viewUserProfile}=useContext(GlobalContext)
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return(
        <div>
            <Formik
                initialValues={{
                    name: viewUserProfile.name,
                    login: viewUserProfile.login,
                    email: viewUserProfile.email,
                    wiek:viewUserProfile.wiek,
                    miasto:viewUserProfile.miasto,
                    image:viewUserProfile.image,
                }}
                validationSchema={Yup.object({

                    name: Yup.string()
                        .min(3, "Name musi mieć co najmniej 3 znaki")
                        .max(2000, "Name nie może być dłuższy niż 2000 znaków")
                        .required("Name jest wymagany"),
                    login: Yup.string()
                        .min(3, "Login musi mieć co najmniej 3 znaki")
                        .max(30, "Login nie może być dłuższy niż 30 znaków")
                        .required("Login jest wymagany"),
                    email: Yup.string()
                        .required("Email nie moze byc pusty")
                        .matches(emailRegex, {message: "email musi byc poprawny"}),
                    miasto: Yup.string(),
                    wiek: Yup.number().min(10),
                    image:Yup.string(),


                })}
                onSubmit={(values, {resetForm}) => {
                    // console.log(values)
                    putRequests("User Profile",values)
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>
                        Name
                        <Field type="text" name="name" placeholder="napisz imie"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="name" component="div"/>
                        <br/>
                        Login
                        <Field type="text" name="login" placeholder="napisz login"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="login" component="div"/>
                        <br/>
                        Email
                        <Field type="text" name="email" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="email" component="div"/>
                        <br/>
                        Miasto
                        <Field type="text" name="miasto" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="miasto" component="div"/>
                        <br/>
                        Wiek
                        <Field type="number" name="wiek" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="wiek" component="div"/>
                        <br/>

                        <button style={{border: "1px solid black", backgroundColor: "white", padding: "10px"}}
                                type="submit" disabled={!dirty || !isValid}
                        >Edit
                        </button>
                    </Form>)}

            </Formik>
        </div>
    )
}
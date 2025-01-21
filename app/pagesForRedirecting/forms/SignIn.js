
'use client'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";


export default function SignIn(){
    const {addDoListy,changePage,signIn}=useContext(GlobalContext)
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex=/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return(
        <div>
            <Formik
                initialValues={{
                    name: "",
                    login: "",
                    password: "",
                    email: "",
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
                    password: Yup.string()
                        .min(4, "Password musi mieć co najmniej 4 znaków")
                        .max(30, "Password nie może być dłuższy niż 30 znaków")
                        //   .matches(passwordRegex,{message:"musi miec co najmniej 1 upper case letter,1lower case letter i jeden number "})
                        .required("Password jest wymagany"),
                    email: Yup.string()
                        .required("Email nie moze byc pusty")

                        .matches(emailRegex, {message: "email musi byc poprawny"}),


                })}
                onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    signIn(values)
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
                        Password
                        <Field type="password" name="password" placeholder="napisz haslo"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="password" component="div"/>
                        <br/>

                        Email
                        <Field type="text" name="email" placeholder="napisz email"
                        />
                        <ErrorMessage style={{backgroundColor: "red"}} name="email" component="div"/>
                        <br/>
                        <button style={{border: "1px solid black", backgroundColor: "white", padding: "10px"}}
                                type="submit" disabled={!dirty || !isValid}
                        >Add
                        </button>
                    </Form>)}

            </Formik>
            <button style={{color: "blue",display:"block",margin:"auto"}} onClick={() => changePage("logIn")}>
                Juz mam konto: LogIn
            </button>
        </div>
    )
}
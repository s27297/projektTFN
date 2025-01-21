'use client'

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function Login(){
    const {logIn,changePage}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                }}
                validationSchema={Yup.object({

                    login: Yup.string()
                        .required("Login jest wymagany"),
                    password: Yup.string()
                        .required("Haslo jest wymagane"),


                })}
                onSubmit={(values, {resetForm}) => {


                    console.log(values)
                    logIn(values)
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>

                        <Field type="text" name="login" placeholder="napisz login"
                        />
                        <ErrorMessage name="login" component="div"/>
                        <br/>
                        <Field type="password" name="password" placeholder="napisz haslo"
                        />
                        <ErrorMessage name="password" component="div"/>
                        <br/>
                        <button type="submit" disabled={!dirty || !isValid}
                        >Log In
                        </button>
                    </Form>)}

            </Formik>
            <button style={{color: "blue",display:"block",margin:"auto"}} onClick={()=>changePage("signIn")}>
                Nie masz konta: zaloguj sie</button>
        </div>
    )

}
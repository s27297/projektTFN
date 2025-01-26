
'use client'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";


export default function EditCommit() {
    const {putRequests,editCommit}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    text:   editCommit.text,

                }}
                validationSchema={Yup.object({
                   text:Yup.string().required(true,"nie moze byc pusty")
                       .min(1,"musi byc wiekszy od 0 znakow"),


                })}
                onSubmit={(values, {resetForm}) => {
                    // console.log(values)
                    putRequests("Comment",{...values,id:editCommit._id})
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>

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
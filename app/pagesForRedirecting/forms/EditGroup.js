'use client'

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useContext} from "react";
import {GlobalContext} from "@/app/providers/GlobalProvider";

export default function EditGroup() {
    const {putRequests,editGroup}=useContext(GlobalContext)
    return(
        <div>
            <Formik
                initialValues={{
                    name: editGroup.name,

                }}
                validationSchema={Yup.object({


                    name: Yup.string()
                        .required("Name jest wymagany")
                        .min(3,"Name musi miec co najmniej 3 znaki"),


                })}
                onSubmit={(values, {resetForm}) => {


                    // console.log(values)
                    putRequests("Group",values)
                    resetForm()
                }}

            >
                {({dirty, isValid}) => (
                    <Form style={{
                        alignItems: "center", display: "flex", flexDirection: "column",
                        backgroundColor: "yellow", justifyContent: "center", border: "solid black 1px", margin: "10%"
                    }}>

                        <Field type="text" name="name" placeholder="napisz nazwe groupy"
                        />
                        <ErrorMessage name="name" component="div"/>

                        <br/>
                        <button type="submit" disabled={!dirty || !isValid}
                        >Add new group
                        </button>
                    </Form>)}

            </Formik>
        </div>
    )

}
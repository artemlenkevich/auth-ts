import { Field, Form, Formik } from "formik"
import { logInUser, selectErrorMessage } from "../../redux/authSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import style from './LoginPage.module.scss'

interface MyFormValues {
    email: string
    password: string
}

export const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const errorMessage = useAppSelector(selectErrorMessage)

    const initialValues: MyFormValues = {
        email: '',
        password: ''
    };

    return (
        <div>
            <h1>LoginPage</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={({ email, password }) => {
                    dispatch(logInUser({ email, password }))
                }}
            >
                <Form className={style.form}>
                    <label htmlFor="email">
                        Email
                        <Field className={style.field} id="email" name="email" placeholder="" />
                    </label>
                    <label htmlFor="password">
                        Password
                        <Field className={style.field} id="password" name="password" placeholder="" />
                    </label>
                    {errorMessage && <div>{errorMessage}</div>}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
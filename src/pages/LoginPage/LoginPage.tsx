import { Field, Form, Formik } from "formik"
import { logInUser } from "../../redux/authSlice"
import { useAppDispatch } from "../../redux/hooks"
import style from './LoginPage.module.scss'

interface MyFormValues {
    email: string
    password: string
}

export const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch()

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
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
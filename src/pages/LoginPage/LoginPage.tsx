import { Field, Form, Formik } from "formik"
import { logInUser } from "../../redux/authSlice"
import { useAppDispatch } from "../../redux/hooks"

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
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="" />
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
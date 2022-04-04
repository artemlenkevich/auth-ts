import { Field, Form, Formik } from "formik"
import { useLocation, useNavigate } from "react-router-dom"
import { setIsAuth } from "../../redux/authSlice"
import { useAppDispatch } from "../../redux/hooks"

interface MyFormValues {
    username: string
    password: string
}

export const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const { from } = location.state as { from: string }
    

    const initialValues: MyFormValues = {
        username: '',
        password: ''
    };



    return (
        <div>
            <h1>LoginPage</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={({ username, password }) => {
                    if (username === 'Admin' && password === '12345') {
                        dispatch(setIsAuth(true))
                        navigate(from)
                    }
                }}
            >
                <Form>
                    <label htmlFor="username">User name</label>
                    <Field id="username" name="username" placeholder="" />
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
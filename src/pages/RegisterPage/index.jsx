import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const RegisterPage = () => {

    const { register, handleSubmit, formeState: error, reset } = useForm()
    const [ user, setUser ] = useState([])

    const navigate = useNavigate()

    const submit = (formDate) => {
        setUser(formDate)
        reset()
        navigate("/")
    }

    return(
        <>
            <h1>RegisterPage</h1>

            <form onSubmit={handleSubmit(submit)}>
                <input type="name" placeholder="name" {...register("name")}/>
                {error?.name.message}

                <input type="email" placeholder="email" {...register("email")}/>
                {error?.email.message}

                <input type="password" placeholder="password" {...register("password")}/>
                {error?.password.message}

                <button type="submit">Register</button>
            </form>
        </>
    )
}
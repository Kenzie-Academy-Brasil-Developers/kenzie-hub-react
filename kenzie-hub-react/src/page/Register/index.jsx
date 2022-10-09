import { useEffect } from "react"
import api from "../../services"
import Header from  "../../components/Header"
import FormRegister from "../../components/FormRegister"

const Register = () => {

    useEffect(() => {
        api.get("/users", {
            params: {
                limit: 30,
                offset: 0,
              }
        }).then((response) => {

            console.log(response.data)
        })
        


    }, [])

    return (
        <>
            <Header />

            <FormRegister />

        </>
    )
}
export default Register
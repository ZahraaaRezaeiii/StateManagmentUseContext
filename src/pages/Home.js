import { useContext } from "react"
import { ProfileContext } from "../ProfileContext"

export const Home = () => {
    const {username} = useContext(ProfileContext)
    return (
        <p>This is Home page - {username}</p>
    )
}
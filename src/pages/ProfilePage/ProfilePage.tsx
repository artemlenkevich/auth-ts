import { WithAuthRedirect } from "../../hoc"


let ProfilePage: React.FC = () => {
    return (
        <div>ProfilePage</div>
    )
}

ProfilePage = WithAuthRedirect<{}>(ProfilePage)

export { ProfilePage }
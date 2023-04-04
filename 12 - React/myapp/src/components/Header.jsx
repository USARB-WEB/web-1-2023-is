import { Link } from "react-router-dom"
export default function Header(){
    return (
        <header>
            <div>HEADER</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="#">Photos</Link>
                <Link href="#">Video</Link>
                <Link href="#">Blog</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
        </header>
    )
}
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">NV</a>
          <div className="itemContainer">
            <Person iclassname="icon" />
            <span>+91 2348674560</span>

          </div>
          <div className="itemContainer">
            <Mail classname="icon" />
            <span>nupurvaghela@gmail.com</span>

          </div>

        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

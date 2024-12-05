import Navbar from "../Navbar"; 

import styles from "./BaseLayout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
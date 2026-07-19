import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

function Layout({ children }) {

  const { user, signOut } = useAuth();

  return (
    <div style={{ display: "flex" }}>

      <Sidebar 
        user={user}
        signOut={signOut}
      />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px"
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default Layout;
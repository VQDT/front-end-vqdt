import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../context/auth/useAuth";
import { useEffect } from "react";

function AplicadorLayout() {
   const { checkRolePermission } = useAuth()
   const navigate = useNavigate()

   useEffect(() => {
      checkRolePermission(2).then((check) => {
         if (!check) {
            return (
               navigate("/error/unauthorized")
            )
         }
      })
   })

   return (
      <>
         <Header />
         <Outlet />
      </>
   );
}

export default AplicadorLayout;
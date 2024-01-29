import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../context/auth/useAuth";
import { useEffect } from "react";

function ElaboradorLayout() {
   const { checkRolePermission } = useAuth()
   const navigate = useNavigate()

   useEffect(() => {
      checkRolePermission(3).then((check) => {
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

export default ElaboradorLayout;
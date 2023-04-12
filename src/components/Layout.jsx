import { Children } from "react"
import NavigationBar from "./NavBar/NavigationBar"

export default function Layout({props}){
   return(
      <>
         <NavigationBar />
         {Children}
      </>
   )
}
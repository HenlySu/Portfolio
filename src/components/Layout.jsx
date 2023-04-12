import NavigationBar from "./NavBar/NavigationBar"

export default function Layout({children}){
   return(
      <>
         <NavigationBar />
         {children}
      </>
   )
}
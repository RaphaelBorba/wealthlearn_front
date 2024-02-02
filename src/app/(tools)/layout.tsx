import Header from "@/components/shared/Header"

const Layout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="pt-20">
            <Header/>
            {children}
        </div>
    )
}


export default Layout
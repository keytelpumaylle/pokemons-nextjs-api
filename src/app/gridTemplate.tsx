
import NavbarComponent from "@/components/ui/Navbar";

export const GridTemplate= ({children}:{children:React.ReactNode}) =>{
  return (
    <div className="flex min-h-screen">
        <div className=" rounded-r-sm shadow-xl fixed top-0 left-0 h-full z-20 ">
            <NavbarComponent />
        </div>
        <div className="grid items-center pl-[210px] w-full justify-items-center  p-8 pb-20 ] ">
            <main className="min-h-screen">
                {children}
            </main>
        </div>
    </div>
  );
}
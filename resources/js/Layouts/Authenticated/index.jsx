import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Authenticated = ({auth, children}) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Sidebar */}
                <Sidebar auth={auth} />
                {/* End Sidebar */}

                {/* Start:Content */}
                <div className="ml-[300px] px-[50px]">
                        {/* Start:Topbar */}
                        <div className="py-5">
                            <Topbar name={auth?.user?.name} />
                        </div>
                        {/* End:Topbar */}

                        <main>
                            {children}
                        </main>
                </div>
                {/* End: Content */}

            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}

export default Authenticated;

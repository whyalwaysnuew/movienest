import { Head, Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

const Show = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>

            <section
                className="mx-auto w-full h-screen relative watching-page font-poppins"
                id="stream"
            >
                <div className="pt-[75px] bg-slate-900">
                    <ReactPlayer
                        url="https://youtu.be/KmOVNVZEP9o?si=YxIei3-gmvp3e0xL"
                        controls
                        width={"100%"}
                        height={"850px"}
                    />
                </div>

                <div className="absolute top-5 left-5 z-20">
                    <Link href={route("user.dashboard.index")}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        Details Screen Part Final
                    </span>
                </div>
            </section>
        </>
    );
}

export default Show;

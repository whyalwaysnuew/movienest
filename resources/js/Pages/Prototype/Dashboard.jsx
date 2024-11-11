import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovies from "@/Components/FeaturedMovies";
import CardMovie from "@/Components/CardMovie";

const Dashboard = () => {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };


    return (
        <>
            <Authenticated>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <div className="py-10 flex flex-col gap-[50px]">
                    <div>
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Featured Movies
                        </div>
                        <Flickity className="gap-[30px]" options={flickityOptions}>
                            {/* Movie Thumbnail */}
                            {[1, 2, 3, 4].map((i) => (
                                <FeaturedMovies
                                    name={`Emily in Paris ${i}`}
                                    category="Action Drama"
                                    thumbnail="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
                                    slug="ngab-ers"
                                    rating={i + 1}
                                    key={i}
                                />
                            ))}
                        </Flickity>
                    </div>

                    <div className="mt-[50px]">
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Browse
                        </div>
                        <Flickity className="gap-[30px]" options={flickityOptions}>
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <CardMovie
                                    key={i}
                                    name={`Ngabers ${i}`}
                                    category="Animation Drama"
                                    slug="ngabers-gg"
                                    thumbnail="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
                                />
                            ))}
                        </Flickity>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

export default Dashboard;

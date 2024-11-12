import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovies from "@/Components/FeaturedMovies";
import CardMovie from "@/Components/CardMovie";

const Dashboard = ({auth, featuredMovies, movies}) => {
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
            <Authenticated auth={auth}>
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
                        <Flickity
                            className="gap-[30px]"
                            options={flickityOptions}
                        >
                            {/* Movie Thumbnail */}
                            {featuredMovies.map((movie, i) => (
                                <FeaturedMovies
                                    name={movie?.name}
                                    category={movie?.category}
                                    thumbnail={movie?.thumbnail}
                                    slug={movie?.slug}
                                    rating={movie?.rating}
                                    key={movie?.id}
                                />
                            ))}
                        </Flickity>
                    </div>

                    <div className="mt-[50px]">
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Browse
                        </div>
                        <Flickity
                            className="gap-[30px]"
                            options={flickityOptions}
                        >
                            {movies.map((movie, i) => (
                                <CardMovie
                                    key={movie?.id}
                                    name={movie?.name}
                                    category={movie?.category}
                                    slug={movie?.slug}
                                    thumbnail={movie?.thumbnail}
                                />
                            ))}
                        </Flickity>
                    </div>
                </div>
            </Authenticated>
        </>
    );
};

export default Dashboard;

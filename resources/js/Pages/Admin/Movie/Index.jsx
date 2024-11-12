import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({auth, flashMessage, movies}) => {

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Movie</title>
            </Head>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton className="rounded-2xl bg-alerange py-[13px] text-center px-4 mb-6">
                    <span className="text-base font-semibold text-white">
                        Create New Movie
                    </span>
                </PrimaryButton>
            </Link>

            {flashMessage?.message && (
                <FlashMessage message={flashMessage?.message} />
            )}

                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th className="p-4">No</th>
                            <th className="p-4">Image</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Rating</th>
                            <th className="p-4" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie,i) => (
                            <tr key={movie.id}>
                                <td>{i+1}</td>
                                <td>
                                    <img src={`/storage/${movie?.thumbnail}`} alt={movie?.name} className="w-32 rounded-md" />
                                </td>
                                <td className="">
                                    {movie?.name}
                                </td>
                                <td>
                                    {movie?.category}
                                </td>
                                <td>
                                    {movie?.rating.toFixed(1)}
                                </td>
                                <td>
                                    <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                        <PrimaryButton className="bg-orange-400 w-full py-2 px-4 rounded-md text-white hover:bg-orange-500" type="button">
                                            Edit
                                        </PrimaryButton>
                                    </Link>
                                </td>
                                <td>
                                    <PrimaryButton className="bg-red-600 w-full py-2 px-4 rounded-md text-white hover:bg-red-700" type="button">
                                        Delete
                                    </PrimaryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </Authenticated>
    );
}

export default Index;

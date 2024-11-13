import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({auth, flashMessage, movies}) => {

    const {delete: destroy, put } = useForm();

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Movie</title>
            </Head>
            <div className="flex justify-between py-4">
                <h1 className="text-xl font-bold">List of Movies</h1>
                <Link href={route("admin.dashboard.movie.create")}>
                    <PrimaryButton className="rounded-2xl bg-alerange py-[13px] text-center px-4">
                        <span className="text-base font-semibold text-white">
                            Create New Movie
                        </span>
                    </PrimaryButton>
                </Link>
            </div>
            <hr className="my-4" />

            {flashMessage?.message && (
                <FlashMessage message={flashMessage?.message} />
            )}

            <main className="mb-[100px]">
                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th className="p-4">No</th>
                            <th className="p-4">Image</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Rating</th>
                            <th className="p-4" colSpan={2}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, i) => (
                            <tr key={movie.id}>
                                <td>{i + 1}</td>
                                <td>
                                    <img
                                        src={`/storage/${movie?.thumbnail}`}
                                        alt={movie?.name}
                                        className="w-32 rounded-md"
                                    />
                                </td>
                                <td className="">{movie?.name}</td>
                                <td>{movie?.category}</td>
                                <td>{movie?.rating.toFixed(1)}</td>
                                <td>{movie?.is_featured ? (
                                    <span className="text-green-600 font-semibold">
                                        Featured
                                    </span>
                                ) : (
                                    <span className="text-red-600 font-semibold">
                                        Not Featured
                                    </span>
                                )}</td>
                                <td>
                                    {movie.deleted_at ? (
                                        <>
                                        </>
                                    ) : (
                                        <Link
                                            href={route(
                                                "admin.dashboard.movie.edit",
                                                movie.id
                                            )}
                                        >
                                            <PrimaryButton
                                                className="bg-orange-400 w-full py-2 px-4 rounded-md text-white hover:bg-orange-500"
                                                type="button"
                                            >
                                                Edit
                                            </PrimaryButton>
                                        </Link>
                                    )}
                                </td>
                                <td>
                                    <PrimaryButton
                                        onClick={() => {
                                            movie?.deleted_at
                                                ? put(
                                                    route(
                                                        "admin.dashboard.movie.restore",
                                                        movie.id
                                                    )
                                                )
                                                : destroy(
                                                    route(
                                                        "admin.dashboard.movie.destroy",
                                                        movie.id
                                                    )
                                                );
                                        }}
                                        className="bg-red-600 w-full py-2 px-4 rounded-md text-white hover:bg-red-700"
                                        type="button"
                                    >
                                        {movie.deleted_at ? "Restore" : "Delete"}
                                    </PrimaryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </Authenticated>
    );
}

export default Index;

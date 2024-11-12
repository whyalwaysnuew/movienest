import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import { router } from "@inertiajs/react";

const Edit = ({auth, movie}) => {
    const { data, setData, processing } = useForm({
        ...movie
    });

    const errors = usePage().props.errors;

    const submit = (e) => {
        e.preventDefault();

        if(data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Edit Movie" />

            <h1 className="text-xl font-bold">Edit | {movie?.name}</h1>
            <hr className="my-4" />

            <form onSubmit={submit} className="grid space-y-[14px]">
                <div>
                    <InputLabel
                        htmlFor="name"
                        value="Title"
                        className="text-lg text- font-semibold block mb-2"
                    />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        placeholder="e.g. The Batman"
                        value={data.name}
                        className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="category"
                        value="Category"
                        className="block mb-2 text-lg font-semibold"
                    />
                    <TextInput
                        id="category"
                        type="text"
                        name="category"
                        placeholder="e.g. Action Drama"
                        value={data.category}
                        className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                        autoComplete="category"
                        isFocused={true}
                        onChange={(e) => setData("category", e.target.value)}
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="video_url"
                        value="Video URL"
                        className="block mb-2 text-lg font-semibold"
                    />
                    <TextInput
                        id="video_url"
                        type="text"
                        name="video_url"
                        placeholder="Insert Link"
                        value={data.video_url}
                        className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                        autoComplete="video_url"
                        isFocused={true}
                        onChange={(e) => setData("video_url", e.target.value)}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="thumbnail"
                        value="Thumbnail"
                        className="block mb-2 text-lg font-semibold"
                    />
                    <img
                        src={`/storage/${movie?.thumbnail}`}
                        alt={movie?.name}
                        className="w-32 rounded-md mb-2"
                    />
                    <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        onChange={(e) =>
                            setData("thumbnail", e.target.files[0])
                        }
                        placeholder="Drop an Image"
                        className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none border-2 border-dashed bg-slate-200 border-gray-400"
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="rating"
                        value="Rating"
                        className="block mb-2 text-lg font-semibold"
                    />
                    <TextInput
                        id="rating"
                        type="text"
                        name="rating"
                        placeholder="e.g. 8.4"
                        value={data.rating}
                        className="rounded-2xl py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                        autoComplete="rating"
                        isFocused={true}
                        onChange={(e) => setData("rating", e.target.value)}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>

                <div className="flex flex-row items-center gap-3">
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        className="bg-gray-200 h-[20px] w-[20px]"
                        checked={movie?.is_featured}
                    />
                    <InputLabel
                        htmlFor="is_featured"
                        value="Featured"
                        className="block text-lg font-semibold"
                    />
                    <InputError message={errors.is_featured} className="mt-2" />
                </div>

                <div className="grid space-y-[20px] mt-[50px]">
                    <PrimaryButton
                        type="submit"
                        className="rounded-2xl hover:bg-orange-600 bg-alerange py-[13px] mt-[50px] text-center"
                        disabled={processing}
                    >
                        <span className="text-base text-white font-semibold">
                            Submit
                        </span>
                    </PrimaryButton>
                    <Link href={route("admin.dashboard.movie.index")}>
                        <PrimaryButton
                            type="button"
                            className="rounded-2xl w-full border mb-[50px] border-black py-[13px] text-center hover:bg-gray-200"
                        >
                            <span className="text-base font-semibold">
                                Cancel
                            </span>
                        </PrimaryButton>
                    </Link>
                </div>
            </form>
        </Authenticated>
    );
}

export default Edit;

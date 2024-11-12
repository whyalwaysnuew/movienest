import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({auth, flashMessage}) => {
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
        </Authenticated>
    );
}

export default Index;

import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />

            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-15 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <div className="my-[40px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Register
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        htmlFor="fullname"
                                        value="Full Name"
                                        className="text-base block mb-2"
                                    />
                                    <TextInput
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        placeholder="Dasha Taran"
                                        value={data.name}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        autoComplete="fullname"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        className="text-base block mb-2"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="text-base block mb-2"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={data.password}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                        className="text-base block mb-2"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton
                                    className="rounded-2xl bg-alerange py-[13px] text-center"
                                    disabled={processing}
                                    type="submit"
                                >
                                    <span className="text-base font-semibold">
                                        Register
                                    </span>
                                </PrimaryButton>

                                <Link href={route("login")}>
                                    <PrimaryButton className="rounded-2xl w-full border border-white py-[13px] text-center">
                                        <span className="text-base text-white">
                                            Sign in to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

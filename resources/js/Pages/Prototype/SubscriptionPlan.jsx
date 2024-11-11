import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";

const SubscriptionPlan = () => {
    return (
        <Authenticated>
            <Head>
                <title>Subscription Plan</title>
            </Head>

            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        name="Basic"
                        price="275000"
                        durationInMonth={3}
                        features={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3",
                            "Feature 4",
                        ]}
                    />

                    <SubscriptionCard
                        isPremium
                        name="For Greatest"
                        price="868000"
                        durationInMonth={6}
                        features={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3",
                            "Feature 4",
                            "Feature 5",
                            "Feature 6",
                        ]}
                    />
                </div>
            </div>
        </Authenticated>
    );
}

export default SubscriptionPlan;

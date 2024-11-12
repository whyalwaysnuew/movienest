import { Head, router } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";

const SubscriptionPlan = ({ auth, plans }) => {
    const selectSubscription = id => {
        router.post(route("user.dashboard.subscriptionPlan.userSubscribe", {subscriptionPlan: id}));
    }

    return (
        <Authenticated auth={auth}>
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
                    {plans.map((item, i) => (
                        <SubscriptionCard
                            name={item?.name}
                            price={item?.price}
                            durationInMonth={item?.active_period_in_months}
                            features={JSON.parse(item?.features)}
                            isPremium={item?.name === 'Premium'}
                            key={item?.id}
                            onSelectSubscription={() => selectSubscription(item?.id)}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default SubscriptionPlan;

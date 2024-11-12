import { Link } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./Menuitem";
import { UserMenu, UserOthers } from "./MenuList";

const Sidebar = ({auth}) => {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href={route("prototype.dashboard")}>
                    <img src="/images/moonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 side-link mb-4">Menu</div>
                        {UserMenu.map((menu, i) => (
                            <MenuItem
                                key={`${i}-${menu.text}`}
                                link={menu.link}
                                text={menu.text}
                                icon={menu.icon}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, i) => (
                            <MenuItem
                                key={`${i}-${menu.text}`}
                                link={menu.link}
                                text={menu.text}
                                icon={menu.icon}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu?.method}
                            />
                        ))}
                    </div>

                    {auth?.activePlan && (
                        <SubscriptionDetail
                            name={auth?.activePlan?.name}
                            isPremium={auth?.activePlan?.name === "Premium"}
                            remainingActiveDays={
                                auth?.activePlan?.remainingActiveDays
                            }
                            activeDays={auth?.activePlan?.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;

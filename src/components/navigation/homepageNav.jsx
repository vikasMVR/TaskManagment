import { NavLink } from "react-router-dom"

export default function HomePageNavigation() {
    return (
        <nav className="w-full ">
            <div className=" mx-8 h-16">
                <div className="flex items-center space-x-2 sm:space-x-8 justify-center h-full">
                    <NavLink to={'#'} end
                        className={" text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent hover:border-yellow-400 focus:border-yellow-400 px-2 text"}>
                        sectionOne
                    </NavLink>
                    <NavLink to={'#'} end
                        className={" text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 px-2"}>
                        Contribute
                    </NavLink>
                    <NavLink to={'#'} end
                        className={"text-lg hover:text-yellow-400 duration-200 ease-in border-b-2 border-transparent focus:border-yellow-400 hover:border-yellow-400 px-2"}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
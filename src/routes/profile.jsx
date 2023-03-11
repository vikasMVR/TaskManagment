import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';


export default function UserProfile() {
    const navigate = useNavigate();
    const { user, SignOut } = useUserAuth();
    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const emailVerified = user?.emailVerified;
    return (
        <div className="px-4 py-2 h-full">
            <div className="w-3/4 mx-auto">
                <div className="w-full">
                    <div className="flex justify-start my-4">
                        <Avatar imgUrl={photoURL} size='w-48 md:w-60' />
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-2xl font-normal text-white">{displayName ? displayName : "User's Name"}</p>
                        <p className="text-lg font-light text-slate-500"><Link to={"#"}>{email ? email : "user's email"}</Link></p>
                        <button
                            type='button' onClick={() => {
                                SignOut()
                            }}
                            className="px-3 py-1 rounded-lg font-light bg-slate-600">
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Avatar({ imgUrl, size, ...props }) {
    return (
        <img src={!imgUrl ? "https://tecdn.b-cdn.net/img/new/avatars/2.webp" : imgUrl} alt={"user"}
            className={clsx(" cursor-pointer rounded-full",
                size ? size : 'w-60',
            )}
            {...props} />
    )
}



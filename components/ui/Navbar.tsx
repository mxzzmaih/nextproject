import Image from "next/image";
import Link from "next/link";
import logo from '/img/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; 
const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
            <Link href="/" passHref>
                <Image src={logo} alt="admindashboard" width={40} height={40} />
            </Link>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                <AvatarFallback className="text-black">BT</AvatarFallback>
            </Avatar>
        </div>
    );
}

export default Navbar;

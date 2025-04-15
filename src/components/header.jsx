import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowLeft, CarFront, Heart, Layout, Lock } from "lucide-react"

const Header = async ({isAdminPage = false}) => {
    const isAdmin = false

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="mx-auto px-3 py-3 flex items-center justify-between">
                <Link href={isAdminPage ? "/admin" : "/"}>
                    <Image 
                        src={'/logo.png'}
                        alt="logo"
                        width={800}
                        height={60}
                        className="h-12 w-auto object-contain"
                    />
                    {isAdminPage && (
                        <span className="text-xs font-extralight">admin</span>
                    )}
                </Link>
                <div className="flex items-center space-x-4 ">
                    {isAdminPage ? (
                        <>
                         <Link href={"/admin"}>
                            <Button variant={"outline"}>
                                <ArrowLeft size={18} />
                                <span className="flex items-center gap-2">Back To App</span>
                            </Button>
                        </Link>
                        </>
                    ):(
                    <SignedIn>
                    {isAdmin ? ( <Link href={"/admin"} className="flex">
                                <Button>
                                    <Layout size={18} />
                                    <span className="hidden md:inline">Admin</span>
                                </Button>
                            </Link>) :(
                        <>
                            <Link href={"/reservations"}>
                                <Button variant={"outline"}>
                                    <CarFront size={18} />
                                    <span className="hidden md:inline">My Reservations</span>
                                </Button>
                            </Link>
                            <Link href={"/saved-cars"}>
                                <Button>
                                    <Heart size={18} />
                                        <span className="hidden md:inline">Saved Cars</span>
                                </Button>
                            </Link>
                        </>
                            )}
                        </SignedIn>
                    )}
                <SignedOut>
                    <SignInButton forceRedirectUrl="/">
                        <Button variant={"outline"}>
                            <span className="text-sm font-light">Login</span>
                            <Lock size={16} />
                        </Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton appearance={{ elements: { avatarBox: "w-10 h-10"}}}/>
                </SignedIn>
                </div>
            </nav>
        </header>
    )
}
export default Header
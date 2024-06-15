import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="sticky w-full z-20 top-0 start-0 ">
			<nav className="bg-white border-b border-gray-200 shadow-xl">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/logos/logo_main.svg" width={120} height={60} alt="Logo" title="Logo" priority />
					</Link>
					<div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
						<Link
                            href="/contact"
							role="button"
							className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
							Contact us
						</Link>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
							aria-controls="navbar-sticky"
							aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
						id="navbar-sticky">
						<ul className="flex flex-col p-4 px-0 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
							<li>
								<Link
									href="/services"
									className="block py-2 px-3 lg:rounded border-b border-primary lg:border-0 text-secondary  hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0">
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="block py-2 px-3 text-secondary lg:rounded border-b border-primary lg:border-0 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0">
									About
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="block py-2 px-3 text-secondary lg:rounded border-b border-primary lg:border-0 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0">
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="block py-2 px-3 text-secondary lg:rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 ">
									Faq
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

import {Component} from "react";
import Logo from "../../../images/PigIcon.png"

export class Login extends Component {
    render() {
        return (
            <>
                <section className="bg-gray-50 dark:bg-pink-600">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-4 text-5xl font-semibold text-pink-950">
                            <img className="w-28 h-28 mr-2"
                            src={Logo}/>
                            Piggy
                        </a>

                        <div className="w-[45%] bg-white rounded-lg shadow dark:border   xl:p-0 dark:bg-pink-400 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                            Your Email
                                        </label>
                                        <input type="email" name="email" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="name@company.com"/>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </section>

            </>
        );
    }
}

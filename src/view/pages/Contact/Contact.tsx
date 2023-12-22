import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="bg-pink-600">
                <section className="bg-white dark:bg-pink-600">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                            Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">Got
                            a technical issue? Want to send feedback about a beta feature? Need details about our
                            Business
                            plan? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email
                                </label>
                                <input type="email" id="email"
                                       className="shadow-sm bg-pink-950 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="name@flowbite.com" required/>
                            </div>
                            <div>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                <input type="text" id="subject"
                                       className="block p-3 w-full text-sm text-gray-900 bg-pink-950 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="Let us know how we can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    message</label>
                                <textarea id="message"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-pink-950 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit"
                                    className="mt-24 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-pink-950 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-pink-900 dark:focus:ring-primary-800 shadow-xl hover:shadow-pink-950">Send
                                message
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}

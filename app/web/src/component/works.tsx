import imgWork from '../assets/img-works.png'
import { MinusIcon } from "@heroicons/react/24/outline";

export default () => {
    return <>
    <div className="w-full h-full bg-hero">
            <div className="container mx-auto px-4 py-16 lg:px-20">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="content-center mb-4">
                        <img className="h-fit " src={imgWork} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="flex items-center text-yellow-400 font-medium lg:text-lg"><span className="mr-2"><MinusIcon className="w-4"/></span> How It Work</p>
                        <h1 className="text-3xl tracking-wide font-bold text-white my-6 lg:text-5xl lg:leading-snug">Steps to get powerfull services</h1>

                        <table className="table-auto">
                            <tbody>
                                <tr className="font-medium text-gray-100">
                                    <td className="pr-4 py-4">1</td>
                                    <td>Site Map and User Flow</td>
                                </tr>
                                <tr className="font-medium text-gray-400">
                                    <td></td>
                                    <td>Nibh ut lacus egestas orci, dolor. Eu eros, laoreet euismod tortor nibh purus</td>
                                </tr>
                                <tr className="font-medium text-gray-100">
                                    <td className="pr-4 py-4">2</td>
                                    <td>Wireframing / Lofi</td>
                                </tr>
                                <tr className="font-medium text-gray-400">
                                    <td></td>
                                    <td>Nibh ut lacus egestas orci, dolor. Eu eros, laoreet euismod tortor nibh purus</td>
                                </tr>
                                <tr className="font-medium text-gray-100">
                                    <td className="pr-4 py-4">3</td>
                                    <td>Visualize / Hifi</td>
                                </tr>
                                <tr className="font-medium text-gray-400">
                                    <td></td>
                                    <td>Nibh ut lacus egestas orci, dolor. Eu eros, laoreet euismod tortor nibh purus</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}
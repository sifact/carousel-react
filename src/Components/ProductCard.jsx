import React from "react";
import { FaStar } from "react-icons/fa";
import img from "../assets/img/piz1.jpg";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const ProductCard = () => {
    return (
        <section>
            <Carousel breakPoints={breakPoints}>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product rounded-lg border-borderColor shadow-md bg-bgColor w-[255px]">
                    <div className="">
                        <img
                            className="p-3 rounded-lg mx-auto"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="text-center">
                        <div>
                            <h6 className="text-lg font-semibold">
                                Havana Special
                            </h6>
                        </div>
                        <div className="price">
                            <span className="text-xl font-bold">19$</span>
                        </div>
                        <div className="rating flex gap-2 items-center py-2 justify-center">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="flex flex-col pb-2">
                            <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                                Add To Cart
                            </button>
                            <button className="text-primary text-xl font-semibold">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default ProductCard;

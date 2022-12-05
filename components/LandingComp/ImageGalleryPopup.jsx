import { useState, useEffect } from "react";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
export default function ImageGalleryPopup() {
    const images = [
        {
            src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
            original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
            width: 320,
            height: 213,
            caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
        },
        {
            "src": "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            "original": "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        },
        {
            "src": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
            "original": "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
        }
    ]

    return (
        <>
            <div>
                <div className="">
                    <LightGallery plugins={[lgZoom]} mode="lg-fade" elementClassNames="grid lg:grid-cols-4 gap-5 w-full">
                        {
                            images.map((gal, index) => (
                                <a
                                    data-lg-size="1406-1390"
                                    className="gallery-item w-full scale-90 hover:scale-110 ease-in duration-500"
                                    data-src={gal.src}
                                    // className=" "
                                >
                                    <img
                                        className="img-responsive"
                                        src={gal.src}
                                    />
                                </a>
                            ))
                        }


                    </LightGallery >
                </div>
            </div>

        </>
        // <div>
        //     <div className="grid lg:grid-cols-4 gap-5">
        //         {
        //             images.map((gal, index) => (
        //                 <div onClick={() => handleClick(index )} className=" w-full scale-90 hover:scale-110 ease-in duration-500">
        //                     <img src={gal.original} className="w-full " alt="Louvre" />
        //                 </div>
        //             ))
        //         }
        //     </div>
        //     {currentImage && (
        //         /* @ts-ignore */
        //         <Lightbox
        //             mainSrc={currentImage.original}
        //             imageTitle={currentImage.caption}
        //             mainSrcThumbnail={currentImage.src}
        //             nextSrc={nextImage.original}
        //             nextSrcThumbnail={nextImage.src}
        //             prevSrc={prevImage.original}
        //             prevSrcThumbnail={prevImage.src}
        //             onCloseRequest={handleClose}
        //             onMovePrevRequest={handleMovePrev}
        //             onMoveNextRequest={handleMoveNext}
        //         />
        //     )}
        // </div>
    );
}

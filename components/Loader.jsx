import React from 'react'
import Lottie from 'react-lottie';
import animationUrl2 from "../assets/fire.json"
const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationUrl2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (<>
        <Lottie
            options={defaultOptions}
            height={100}
            width={100}
        />
    </>
    )
}

export default Loader
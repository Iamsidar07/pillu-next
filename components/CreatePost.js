import React, { useState } from 'react'
import { Loader, FormField } from "../components"
import { getRandomPrompt } from '../utils'
import { preview } from "../assets"
import { showToast } from '../utils'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ArtStyle from './ArtStyle'

const CreatePost = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        prompt: "",
        photo: "",
        photos: null,
        numberOfImages: 2,
    });
    const [responseData, setResponseData] = useState(null);
    const [generatingImage, setGeneratingImage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [artStyle, setArtStyle] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const generateImage = async () => {
        if (form.prompt) {
            setGeneratingImage(true);
            // console.log(form)
            try {
                const response = await fetch("https://pillu.onrender.com/api/v1/dalle", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt: `${form.prompt} ${artStyle}`, numberOfImages: form.numberOfImages }),
                })
                const data = await response.json();

                // console.log(data)
                // console.log({ responseData })
                setForm({ ...form, prompt: `${form.prompt} ${artStyle}`, photo: `data:image/jpeg;base64,${data.photo}`, photos: data.photos.map((item) => `data:image/jpeg;base64,${item}`) });
                setSelectedImage(form.photo);
            } catch (error) {
                showToast(error);
            } finally {
                setGeneratingImage(false);
            }
        } else {
            showToast("Please enter a prompt.", "warning")
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (form.photo && form.prompt) {
            setIsLoading(true);
            try {
                const response = await fetch("https://pillu.onrender.com/api/v1/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                await response.json();
                router.push("/")
            } catch (error) {
                showToast(error)
            } finally {
                setIsLoading(false);
                // console.log(form)
                showToast("Shared successfully with world.", "success")
            }

        } else {
            showToast("Please enter a prompt and generate image and start sharing.", "warning")
        }


    }
    const handleChange = (e) => {
        let value = e.target.value;
        setForm({ ...form, [e.target.name]: value })
    }

    const handleRange = (e) => {
        setForm({ ...form, numberOfImages: Number(e.target.value) })
    }

    const handleSupriseMe = () => {
        const randomPrompt = getRandomPrompt();
        setForm({ ...form, prompt: randomPrompt });

    }


    // console.log(form)
    // console.log('After', { responseData })

    return (
        <section className='max-w-7xl mt-20 mx-auto'>
            <div>
                <h1 className='font-bold text-4xl sm:text-7xl text-gradient mt-5 max-w-2xl'>Create Art</h1>
                <p className=" mt-4 text-gray-500 max-w-2xl">Transform your imaginations into  art with AI-powered creativity.</p>
            </div>
            <form className='mt-10 max-w-3xl' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <FormField
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="Manoj kumar"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSupriseMe
                        handleSupriseMe={handleSupriseMe}

                    />
                    <FormField
                        labelName="Select number of images"
                        type="range"
                        name="numberOfImages"
                        placeholder="4"
                        value={form.numberOfImages}
                        handleChange={handleRange}
                        max={4}
                        min={1}
                        step={1}
                    />
                    <ArtStyle
                        setArtStyle={setArtStyle}
                    />
                    <div className="relative max-w-sm  flex items-center justify-center  bg-white rounded ">
                        {
                            form.photo ?
                                <Image
                                    src={form.photo}
                                    width={1280}
                                    height={720}
                                    className="w-full h-full object-contain"
                                    alt={form.prompt}
                                    placeholder='blur'
                                    blurDataURL={form.photo}
                                />

                                :

                                <Image
                                    src={preview}
                                    width={1280}
                                    height={720}
                                    className="h-full w-full  object-contain "
                                    alt='preview'
                                />
                        }
                        {
                            generatingImage && (
                                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black/30 rounded">
                                    <Loader />
                                    <p className='text-sm p-2 rounded text-white backdrop-blur text-center mt-4 bg-[#1e2423]'>This will take a minutes</p>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className=" mt-6 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                    {
                        form.photos?.map((item, i) => (
                            <div key={item} className={`${form.numberOfImages >= 4 && "card"} hover:scale-105 duration-75 ease-in-out  p-2 cursor-pointer rounded  ${selectedImage === item && "gradientbg"}`}>
                                <Image
                                    src={item}
                                    width={1280}
                                    height={720}
                                    className={`w-full h-full object-contain cursor-pointer rounded`}
                                    alt={item}
                                    placeholder='blur'
                                    blurDataURL={item}
                                    onClick={() => {
                                        setForm({ ...form, photo: item });
                                        setSelectedImage(item);
                                    }}
                                    key={i}
                                />
                            </div>
                        )
                        )
                    }
                </div>

                <div className="flex mt-5 gap-5">
                    <button type='button' onClick={generateImage} className={"outline-none border-none bg-[#1dd79b] hover:text-white rounded sm:w-auto w-full text-center px-[12px] py-[8px]"}>
                        {
                            generatingImage ? "Generating..." : "Generate Art"
                        }
                    </button>
                </div>
                <div className="mt-6 gap-5">
                    <p className='text-white'>Once you have created the image you want,you can share it with the world.</p>
                    <button onClick={handleSubmit} type='button' className={"mt-2 outline-none border-[1px] text-[#1dd79b] hover:text-white rounded border-[#1dd79b] sm:w-auto w-full py-[8px] px-[12px] text-center"}>
                        {
                            isLoading ? "Sharing..." : "Share with the world"
                        }
                    </button>
                </div>
            </form>

        </section>
    )
}

export default CreatePost

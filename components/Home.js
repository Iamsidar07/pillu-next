import React, { useEffect, useState } from 'react'
import { Card, Loader, FormField } from "../components"
import { showToast } from '../utils';
import Modal from './Modal';
const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [openImageId,setOpenImageId]=useState('');
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://pillu.onrender.com/api/v1/post", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (response.ok) {
                    const result = await response.json();
                    setPosts(result.data.reverse())
                }
            } catch (error) {
                showToast(error)
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [])

    const RenderCards = ({ data, title }) => {
        if (data?.length > 0) {
            return data.map((item) => openImageId === item._id ? <Modal setOpenImageId={setOpenImageId} key={item._id} {...item} /> : <Card key={item._id}  {...item} setOpenImageId={setOpenImageId} />)
        }
        return <h2 className='text-lg mt-4 text-[#f5a623]'>{title}</h2>
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchInput(e.target.value);
        setSearchTimeout(setTimeout(() => {
            const searchResults = posts.filter((post) => post.name.toLowerCase().includes(searchInput.toLowerCase()) || post.prompt.toLowerCase().includes(searchInput.toLowerCase()));
            setSearchResults(searchResults);
        }, 500))
    }
    
    const totalImageString = `Over ${posts?.length} images`;


    return (
        <section className='max-w-7xl mt-24 mx-auto'>
            <div>
                <h1 className='font-bold text-4xl sm:text-7xl text-gradient mt-5 max-w-2xl'>The community Showcase</h1>
                <p className=" text-xl sm:text-2xl mt-4 text-white max-w-2xl">Bring your <span className='text-[#f5a623] font-bold'>imagination</span> to life With pillu</p>
            </div>
            <div className="mt-10">
                <FormField
                    labelName={`Search Posts ${posts?.length === undefined ? "" : totalImageString}`}
                    type="text"
                    name="text"
                    placeholder={"Start searching posts by names,prompts..."}
                    value={searchInput}
                    handleChange={handleSearchChange}
                />
            </div>
            <div className="mt-10">
                {
                    isLoading ? <div className="flex items-center justify-center">
                        <Loader />
                    </div>
                        :
                        <>
                            {searchInput && <div className="mt-6">
                                <p className='text-lg font-semibold text-gray-400'>Showing search result for <span className='font-medium text-[#f5a623] '>{searchInput}</span></p>
                            </div>
                            }
                            <div className=" mt-6 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 sm:gap-3">
                                {searchInput ? <RenderCards data={searchResults} title={"No search result found."} /> : <RenderCards data={posts} title={"No post found"} />}
                            </div></>
                }
            </div>
        </section>
    )
}

export default Home
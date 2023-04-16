import React, { useEffect, useState } from 'react'
import { Card, Loader, FormField } from "../components"
import { showToast } from '../utils';
import Modal from './Modal';
import { CiSearch } from 'react-icons/ci';
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
        return <h2 className='text-normal mt-4 text-[#1dd79b]'>{title}</h2>
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchInput(e.target.value);
        setSearchTimeout(setTimeout(() => {
            const searchResults = posts.filter((post) => post.name.toLowerCase().includes(searchInput.toLowerCase()) || post.prompt.toLowerCase().includes(searchInput.toLowerCase()));
            setSearchResults(searchResults);
        }, 500))
    }
    
    const totalImageString = `Search Over ${posts?.length} images`;


    return (
        <section className='max-w-7xl mt-20 mx-auto'>
            <div>
                <h1 className='font-bold text-4xl sm:text-7xl text-gradient mt-5 max-w-2xl'>The community Showcase</h1>
                <p className=" mt-4 text-white max-w-2xl">Bring your <span className='text-[#1dd79b] font-bold'>imagination</span> to life With pillu</p>
            </div>

            <div className="mt-10 max-w-2xl mx-auto  space-y-3 ">
                
                <div className='flex items-center space-x-3'>
                    <div className='flex-1'>
                        <FormField
                            // labelName={''}
                            type="text"
                            name="text"
                            placeholder={"Start searching posts by names,prompts..."}
                            value={searchInput}
                            handleChange={handleSearchChange}
                        />
                    </div>
                    <button type='button' className={"outline-none border-none bg-[#1dd79b] hover:bg-[#14e6a4] w-auto text-center rounded px-6 py-4 text-white items-center space-x-2 hidden sm:flex "}>
                        <span><CiSearch size={24} color={"white"} /></span> Search
                    </button>
                    
                </div>
                <p className='text-white text-xs'>{`${posts?.length === undefined ? "" : totalImageString}`}</p>

            </div>
            <div className="mt-10">
                {
                    isLoading ? <div className="flex items-center justify-center">
                        <Loader />
                    </div>
                        :
                        <>
                            {searchInput && <div className="mt-6">
                                <p className='text-normal font-semibold text-gray-400'>Showing search result for <span className='font-medium text-[#1dd79b] '>{searchInput}</span></p>
                            </div>
                            }
                            <div className=" mt-6 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1 sm:gap-3">
                                {searchInput ? <RenderCards data={searchResults} title={"No search result found."} /> : <RenderCards data={posts} title={"No post found"} />}
                            </div></>
                }
            </div>
        </section>
    )
}

export default Home

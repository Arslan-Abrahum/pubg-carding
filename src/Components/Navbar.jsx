import React, { useEffect } from 'react'
import Modal from 'react-modal';
import { useGlobalContext } from '../context';

Modal.setAppElement('#root');

function Navbar({}) {

    const {isModalOpen, toggleModal, handleAddAccount, handleImageUpload,setIsLoggedIn,} = useGlobalContext()

    useEffect(() => {
        // Function to handle scroll lock
        const handleScrollLock = () => {
            if (isModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };
        // Apply scroll lock on mount
        handleScrollLock();

        // Clean up
        return () => {
            document.body.style.overflow = 'auto'; // Restore default on unmount
        };
    }, [isModalOpen]);
    return (
        <div>
            <nav className="bg-white text-black font-bold shadow-lg p-4 flex justify-between items-center">
                <div>
                        <h1 className="text-4xl cursor-pointer">Gujjar Account</h1>
                </div>
                <div>
                    <button className="bg-red-500 text-white py-2 px-8 rounded mr-2 cursor-pointer hover:bg-red-600" onClick={toggleModal}>Add New</button>
                        <button
                        onClick={()=> setIsLoggedIn(false)}
                        className="bg-red-500 text-white py-2 px-8 rounded cursor-pointer hover:bg-red-600">Logout</button>
                </div>
            </nav>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className='fixed inset-0 bg-black bg-image bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='absolute top-4 left-4 flex space-x-7'>
                        <button onClick={toggleModal} className='bg-red-500 py-2 px-4 rounded text-white text-3xl font-bold'>&times;</button>
                    </div>

                    <div className='bg-white rounded-lg shadow-lg w-full max-w-xl'>
                        <div className='mb-4 bg-slate-500 bg-image rounded-t-lg p-12 text-center'>
                            <h2 className='text-4xl font-bold text-white uppercase'>Gujjar Carder</h2>
                        </div>
                        <div className='mb-4 p-6'>
                            <h1 className='text-2xl mb-14 font-semibold uppercase'>Add Carding Account</h1>
                            <form onSubmit={handleAddAccount}>
                                <div className='form-group space-y-4'>
                                    <div>
                                        <input type="file" name="image" accept="image/*" onChange={handleImageUpload} className='w-full p-2 border rounded' required />
                                    </div>
                                    <div>
                                        <input type="text" name="title" placeholder="ACCOUNT TITLE" className='w-full p-2 text-xl rounded outline-none border-b-4' required />
                                    </div>
                                    <div>
                                        <input type="number" name="amount" placeholder="ACCOUNT PRICE" className='w-full p-2 text-xl outline-none border-b-4 rounded' required />
                                    </div>
                                    <div>
                                        <input type="text" name="email" placeholder="ACCOUNT EMAIL / NUMBER" required className='w-full p-2 text-xl outline-none border-b-4 rounded' />
                                    </div>
                                    <div>
                                        <input type="password"  name="password" placeholder="ACCOUNT PASSWORD" required className='w-full p-2 text-xl outline-none border-b-4 rounded' />
                                    </div>
                                    <button type='submit' className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 uppercase'>ADD Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Navbar
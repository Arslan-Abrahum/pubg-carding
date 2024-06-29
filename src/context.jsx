import React, {useEffect, useState, createContext, useContext } from "react";

const AppContext = createContext()
const AppProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [image, setImage] = useState(null);
    const [imageDataUrl, setImageDataUrl] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    useEffect(() => {
      // Load cards from localStorage on component mount
      const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
      setCards(storedCards);
    }, []);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageDataUrl(reader.result);
          setImage(file);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleAddAccount = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const newCard = {
        id: Date.now(), // unique identifier
        title: formData.get('title'),
        amount: formData.get('amount'),
        email: formData.get('email'),
        password: formData.get('password'),
        imageUrl: imageDataUrl, // Use FormData to get file and create URL
      };
  
      const updatedCards = [...cards, newCard];
      setCards(updatedCards);
      // Save to localStorage
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      // Close modal after adding account
      toggleModal();
    };
  
    const viewDetails = (card) => {
      setSelectedCard(card);
      setEditMode(false);
    };
  
    const closeDetails = () => {
      setSelectedCard(null);
      setEditMode(false);
    };
  
    const handleDelete = () => {
      const updatedCards = cards.filter((card) => card.id !== selectedCard.id);
      setCards(updatedCards);
      // Save to localStorage
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      // Close modal after deleting account
      setSelectedCard(null);
    };
  
    const handleInp = (e) => {
      const { name, value } = e.target;
      setSelectedCard((prevCard) => ({
        ...prevCard,
        [name]: value,
      }));
    };
  
    const handleEditSave = () => {
      if (!editMode) {
        setEditMode(true);
      } else {
        const updatedCards = cards.map((card) =>
          card.id === selectedCard.id ? selectedCard : card
        );
        setCards(updatedCards);
        // Save to localStorage
        localStorage.setItem('cards', JSON.stringify(updatedCards));
        setEditMode(false);
      }
    };

    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission

        if (user_email === '' || user_password === '') {
            alert('Please enter your email and password');
        } else if (user_email === 'arslan@gmail.com' && user_password === '1234arslan@') {
            alert('Login Successful');
            setIsLoggedIn(true); // Set login status to true
        } else {
            alert('Invalid email or password');
        }
    };
    return(
        <AppContext.Provider 
            
            value={{
                isModalOpen,
                cards,
                selectedCard,
                editMode,
                isLoggedIn,
                setSelectedCard,
                toggleModal,
                handleImageUpload,
                handleAddAccount,
                viewDetails,
                closeDetails,
                handleDelete,
                handleInp,
                handleEditSave,
                setIsLoggedIn,
                setUserEmail,
                setUserPassword,
                handleLogin
            }}>

            {children}


        </AppContext.Provider>
    )


};
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };
  

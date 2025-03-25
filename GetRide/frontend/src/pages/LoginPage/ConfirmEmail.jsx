import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogPage from '../../components/LogPageComps/LogPage';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
const ConfirmEmail = () => {
  const navigate = useNavigate();

    const [confirmToken, setConfirmToken] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isToken, setIsToken] = useState(false);

  const query = useQuery();


    useEffect(() => {
        const token = query.get("confirmToken");
        if (token && isToken === false) {
          setConfirmToken(token);
          setIsToken(true);
        }
      }, [query]);



      useEffect(() => {
        if(confirmToken !== '' && !isConfirmed) {
            setIsConfirmed(!isConfirmed);
          handleConfirmEmail();
        }
      }, [confirmToken]);
    
      const handleConfirmEmail = async () => {
    
    
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/account/confirmEmail/${confirmToken}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
              }),
            }
          );
    
          if (!response.ok) {
            const errorData = await response.json();
            const message = errorData.message || "Email verification failed.";
            alert(message);
            navigate("/login");
            return;
          }
          
          const emailConfirm = await response.json();
    
          if (emailConfirm && emailConfirm.isVerified) {
            console.log(emailConfirm);
            alert(`${emailConfirm.message}`);
            navigate("/login");
          }
    
    
        } catch (error) {
          console.log("This is the error: ", error);
          setError(
            `Failed to verify. Please check your email `
          );
        }
      };
    



  return (
    <LogPage></LogPage>
  )
}

export default ConfirmEmail
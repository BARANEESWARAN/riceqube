import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import {Card, Button} from 'antd'
import './redirect.css'



function Redirect ()  {
    
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(10)
    const [redirect, setRedirect] = useState(false)
    
    document.title="Page Not found"
        
    useEffect(() => {
         setInterval(() => {
            setCountdown(countdown - 1)
        }, 1000)
        if (countdown === 0) {
            setRedirect(true)
        }
    }, [countdown])

    const handle_click= () => {
        navigate("/")
    }
    

    
    if (redirect === true) {
        navigate("/")
    }
    
    return (
        <div className='page-not-found'>
            <div className=''>
                <Card className='message-card'>
                    <h2>404</h2>
                    <h1>Page Not Found</h1>
                    <p>The specified file was not found on this website. Please check the URL for mistakes and try again,
                        You will be redirect {countdown} seconds ...</p>
                    <Button className='OK-button' onClick={handle_click}>OK</Button>
                </Card>
            </div>
        </div>
    )
}

export default Redirect
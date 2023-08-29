import React, { useState, useEffect } from 'react';
import "./homePage.css"
import { Card,  Image } from 'antd';
import { request } from  "../../../customHook/request"; // Import the request function
import Spinner from '../../actoms/spinner/Spinner';
import homebgImage from "../../../assets/yellow_logo.png"
import Drobdown from '../../actoms/Drobdown/Drobdown';
const HomePage = () => {
const [data, setData] = useState([]);
const [loading,setLoading]=useState(false);
const [userValue,setUserValue]=useState()
const [drobdownOptions,setDrobdownOptions]=useState([])


  const fetchData = async () => {
    setLoading(true)
    try {
     
      const response = await request('Post',{
        "requesttype": "fetchapps",
        "user_name":  "vijay.kumar@gtigrows.com",
        "user_id":  "vijay.kumar@gtigrows.com"
      });
  
      if(response){
        let DrobdownValues = [];
        setData(response);
        setLoading(false)
      
        response.map((res) => {
       
            if (res.app_name ) {
           
                DrobdownValues.push({
                text: res.app_name,
                value: res.app_name
              },)
            }
       
            return DrobdownValues
          })
          setDrobdownOptions(DrobdownValues)
      }
    } catch (error) {
        setLoading(false)
      console.error('Error fetching data:', error.message);
    }
    finally{
        setLoading(false)
    }
  };


useEffect(() => {
fetchData();
 
}, []);

console.log("first",drobdownOptions)

  function handlecard_click(product) {
    window.location.href = product.app_url
    localStorage.setItem("app_name", product.app_name)
    localStorage.setItem("app_id",product.app_id)
  }


  const onSearch = (value) => {
    if (value) {
      setUserValue(value)
    }
    else {
      setUserValue("")
    }

  };

  return (
    <div className="product-listing-page">


        {
            loading===true?
            <Spinner/>:
            (
                <>
                
                
          <div className='app-search'>
          <Image preview={false} src={homebgImage} alt="" width="300px" height="auto" />
          <div className='app_search'>
     <Drobdown 
     allowClear={true}
     showSearch={true}
     placeholder={"Search"}
     width={200}
     className={"app_search_drobdown"}
     onChange={onSearch}
  options={drobdownOptions}

     />

          </div>

        </div>  
                
                
                
                
                
                
                

    
                
                
         
                <div className='hp_card_container' >
                {
  data
    .filter((name) => {
       
      if (userValue !== "" && userValue !==undefined ) {
       return  name.app_name.includes(userValue);
      
      } else {
        return name;
      }
    })
    
    .map((product) =>
    
    {
       
       return (
                  <div >
                    <Card title={product.app_name} 
                    bordered={false} 
                    hoverable 
                    onClick={() => handlecard_click(product)}
                    className='our-team '
                    >
                    <Image preview={false} src={product.image_url} alt="" width="130px" height="auto" />
                    </Card>
                  </div>
                )})}
              </div>
              </>
            )
        }
    
    </div>
  );
};

export default HomePage;

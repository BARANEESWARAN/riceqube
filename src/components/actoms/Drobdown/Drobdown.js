import { Select } from 'antd'
import React from 'react'

function Drobdown({showSearch,value,placeholder,allowClear,onChange,options,className} )  {
  return (
    <div>

        
<Select 
            className={className}
              allowClear={allowClear}
            
              showSearch={showSearch}
              placeholder={placeholder}
              value={value}
           
              onChange={onChange}
              options={options}
             
            />
    </div>
  )
}

export default Drobdown
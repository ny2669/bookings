import React, { useState } from 'react'
import { MdHotel } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { VscPerson } from "react-icons/vsc";
import { BiCar, BiTaxi } from "react-icons/bi";
import { SlPlane } from "react-icons/sl";
import { GiTallBridge } from "react-icons/gi";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = () => {

  

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openDate, setOpenDate] = useState(false)
      const [openOptions, setOpenOptions] = useState(false)
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,

      })

const handleOption = (name, operation) => {

   
    setOptions(prev => {

        console.log(options, operation === 'i')
        return {
            ...prev,
            [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }
    })

}


  return (
    <div className='header'>
        <div className='headerContainer'>
        <div className='headerList'>
            <div className='headerListItem active'>
            <MdHotel/>  
            <span>stays</span>
            </div>
      
     
            <div className='headerListItem'>
            <SlPlane/>  
            <span>Flights</span>
           
        </div>

       
            <div className='headerListItem'>
            <BiCar/>  
            <span>Car Rentals</span>
            </div>
    
            <div className='headerListItem'>
            <GiTallBridge/>  
            <span>Attractions</span>
            </div>

            <div className='headerListItem'>
            <BiTaxi/>  
            <span>Airport Taxis</span>
            </div>
        </div>
<h1 className='headerTitle'>A lifetime discounts? It&apos;s Genius.</h1>
<p className='headerDesc'>Get rewarded for your travels - unlock instat savings of 10% or more with a free Lambabooking account </p>
<button className='headerbtn'>Sign in / Register</button>

<div className='HeaderSearch'>

<div className='HeaderSearchItem'> 
<MdHotel className='searchicon'/>  
<input type='text' placeholder='where are you going?' className='searchbarIput'/>
 </div>

 <div className='HeaderSearchItem'> 
<AiTwotoneCalendar className='searchicon'/>  
<span onClick={() => setOpenDate(prev =>!prev)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
{openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
/>}

 </div>

 <div className='HeaderSearchItem'> 
<VscPerson className='searchicon'/>  
<span>{`${options.adult} Adult . ${options.children} Children . ${options.room}  Room`}</span> 
<div className='options'>
<div className='optionItem'>
<span className='optionText'>Adult</span>
<div className='optionCounterWrap'>
<button className='opptionCounterBtn' onClick={() => handleOption(("adult", "d"))}>-</button>
<span className='optionCounterNumber'>{options.adult}</span>
<button className='opptionCounterBtn' onClick={() => handleOption(("adult", "i"))}>+</button>
</div>
</div>

<div className='optionItem'>
<span className='optionText'>Children</span>
<div className='optionCounterWrap'>
<button className='opptionCounterBtn' onClick={() => handleOption(("children", "d"))}>-</button>
<span className='optionCounterNumber'>{options.children} </span>
<button className='opptionCounterBtn' onClick={() => handleOption(("children", "i"))}>+</button>
</div>
</div>
<div className='optionItem'>
<span className='optionText'>Room</span>
<div className='optionCounterWrap'>
<button className='opptionCounterBtn' onClick={() => handleOption(("room", "d"))}>-</button>
<span className='optionCounterNumber'>{options.room}</span>
<button className='opptionCounterBtn' onClick={() => handleOption(("room", "i"))}>+</button>
</div>
</div>
</div>
</div>

<div className='HeaderSearchItem'> 
<button className='headerbtn'> Search</button>
</div>

</div>
        </div>
    </div>
  )
}

export default Header
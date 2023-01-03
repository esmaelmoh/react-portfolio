import React, { useState } from 'react'
import { HiPlusSm } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { CgClose } from 'react-icons/cg'
import './FaqCard.css'
const FaqCard = ({item}) => {
  const [show , setShow] = useState(false)

  return (
    <div className="faq-card"  data-aos="fade-right" data-aos-duration={item.duration}>
            <div className={show?"quesion-container active":"quesion-container"}>
              <p>{item.faqQuesiion}</p>
              <button onClick={()=>setShow(!show)}>{show?<CgClose style={{color:'white',fontSize:'1rem',fontWeight:'bolder'}}/>:<HiPlusSm/>}</button>
          </div>
              <p className={show?'content show':'content'}>{item.faqAnswer}</p>
       </div>
  )
}

export default FaqCard
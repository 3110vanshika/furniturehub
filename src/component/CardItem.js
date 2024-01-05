import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function CardItem({className, url, imgUrl, title, cardBody,cardSubTitle}) {
  return (
    <div className={className}>
       <Link to={url}>
          <img src={imgUrl} alt={title} />
          <div className={cardBody}>
             <h3>{title}</h3>
             <span>{cardSubTitle}</span>
             <div className="btn_grp">
                <Button btnTxt="Add to cart" />
                <Button btnTxt="Add to wishlist" />
             </div>
          </div>
       </Link>
    </div>
  )
}

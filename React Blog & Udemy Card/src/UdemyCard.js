import React from 'react';
import {useState} from 'react';

function UdemyCard(props) {
  
  // const[card,setCard]=useState([]);

  return (
    <div class="ui card">
  <div class="image">
    <img src={props.profile} alt="Profile"/>
  </div>
  <div class="content">
    <a class="header" href='/'>{props.course}</a>
    <div class="meta">
      <span class="date">{props.author}</span>
    </div>
    <div class="description">
    {props.price}
    </div>
  </div>
  <div class="extra content">
      Rating:
      
      <i class="star icon active" ></i>
      <i class="star icon active" ></i>
      <i class="star icon active" ></i>
      <i class="star icon"></i>
      <i class="star icon"></i>({props.count})
    
  </div>
</div>
  )
}

export default UdemyCard;
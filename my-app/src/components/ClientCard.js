import { requirePropFactory } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import "./ClientCard.css"

function ClientCard(props) {
    return (
        <div className="main-card">
            <div className="client-image-mask">
                <img src={props.clientImage}></img>
            </div>
            <div className="client-details">
                
            </div>
            
            <div><h2>hello</h2></div>
            
        </div>
    );
}

export default ClientCard;

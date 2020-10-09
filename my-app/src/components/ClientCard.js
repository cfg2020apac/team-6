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
                <span className="client-name">{props.clientName}</span>
                <div className="process">
                    <div>Employment</div>
                    <div className="status-box">{props.employmentStatus}</div>
                </div>

                <div className="process">
                    <span>Housing</span>
                    <div className="status-box">{props.housingStatus}</div>
                </div>

                <div className="process">
                    <span>Counselling</span>
                    <div className="status-box">{props.counsellingStatus}</div>
                </div>

                <div className="process">
                    <span>Operations</span>
                    <div className="status-box">{props.operationsStatus}</div>
                </div>
            </div>
            
        </div>
    );
}

export default ClientCard;

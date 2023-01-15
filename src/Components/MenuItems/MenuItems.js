import React, { useState } from 'react';
import './MenuItems.css';
import Accordion from '../Accordion/Accordion';
import { accordionData } from '../../Shared/menuitems-content';

function MenuItems() {
    
    return (
        <div>
            <div className="stox-mi-auto-layout-vertical">
                {accordionData.map(({ title, menuItems, id }) => (
                    <Accordion title={title} menuItems={menuItems} key={id}/>
                ))}
            </div>

        </div>
    )
}

export default MenuItems
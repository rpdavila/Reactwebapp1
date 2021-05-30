import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className={'center'} style={{height:'150px', width:'150px'}}>
            <Tilt style={{ height:'150px', width: '150px' }}
                  className={'fl ct'}>
                <img style={{height: '135px', width: '140px',padding: '5px', margin: '5px'}} src={brain} alt={'logo'}/>
            </Tilt>
        </div>
    )
};
export default Logo;
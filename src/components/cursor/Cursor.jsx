import { forwardRef } from 'react';
import './Cursor.css';
import Magnetic from './Magnetic';

const Header = forwardRef(function index(props, ref) {
  return (
    <div className='header'>
        <Magnetic>
          <div className='burger'>
            <div ref={ref} className='bounds'></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header
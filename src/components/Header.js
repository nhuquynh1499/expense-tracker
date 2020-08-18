import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname])

  return (
    <div className="header">
      <div className={ isActive === "/transaction" || isActive === "/" ? "transaction item active" : "transaction item" }>
        <p>Transaction</p>
      </div>
      <div className={ isActive === "/report"? "item active" : "item" }>
        <p>Report</p>
      </div>
    </div>
  )
}

export default Header
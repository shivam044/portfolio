/**
 * File name: ScroolToTop.js
 * Student's Name: Shivam Ujjainwal
 * StudentID: 301304093
 * Date: 2024-05-31
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;

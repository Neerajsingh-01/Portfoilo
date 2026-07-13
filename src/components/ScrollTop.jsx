import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../css/ScrollTop.css";

function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>

      {show && (

        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      )}

    </>

  );
}

export default ScrollTop;
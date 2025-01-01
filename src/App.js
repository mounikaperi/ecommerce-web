import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import WebFont from 'webfontloader';

function App() {
  const dispatch = useDispatch();
  const { pathName } = useLocation;

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"]
      }
    });
  });

  // always scroll to top on route/path change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathName])

  // disable right click
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 123) e.preventDefault(); //  Opens the browser's developer tools.
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault(); // Opens the "Elements" panel in developer tools.
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault(); // Opens the "Console" in developer tools.
  })
}

export default App;

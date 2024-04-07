import "@/styles/globals.css";
import React from 'react';

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Jost:ital,wght@0,100..900;1,100..900&family=League+Gothic&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default App;

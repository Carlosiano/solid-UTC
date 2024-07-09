import { createSignal, createEffect } from 'solid-js'
import { Header, Main, Footer } from "./components";

function App() {
  const [scrollY, setScrollY] = createSignal(0)

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollY(scrollPosition);
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>
      <Header scrollY={scrollY()} />
      <Main />
      <Footer />

      <a
        href="#top"
        className={`back-top-btn ${scrollY() > 100 && "active"}`}
        aria-label="back top top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  );
}

export default App;

import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useInView } from './hooks/useInView';
import NoticeBanner from './components/NoticeBanner';


function App() {
  const { ref, isVisible } = useInView();

  return (
    <>
      <section ref={ref}>
        <Hero />
      </section>
      <About />
      <Companies />
      <Projects />
      <Contact />
      {!isVisible && <NoticeBanner />}
    </>
  );
}

export default App

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import EducationScreen from './screens/EducationScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import HobbiesScreen from './screens/HobbiesScreen';
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Routes path="/" element={<App />}>
            <Route index={true} path="/" element={<HomeScreen />} />
            <Route path="/experience" element={<ExperienceScreen />} />
            <Route path="/education" element={<EducationScreen />} />
            <Route path="/hobbies" element={<HobbiesScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes >
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App;
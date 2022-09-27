import Header from "./Header";
import Links from "./Links";
import Footer from "./Footer";

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen backGround'>
      <Header />
      <Links />
      <Footer />
    </div>
  );
}

export default App;

import MainBanner from '../components/mainBanner/MainBanner';
import NewsHomepage from '../components/news/NewsHomepage'

const HomePage = (props) => {
  return (
    <>
      <div className="App">
        <main>
      <MainBanner />
      <NewsHomepage />
      
        </main>
      </div>
    </>
  );
};

export default HomePage;

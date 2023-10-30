import MainBanner from '../components/mainBanner/MainBanner';
import NewsHomepage from '../components/news/NewsHomepage'
import MainScrollbar from '../components/MainScrollbar/MainScrollbar';


const HomePage = (props) => {
  return (
    <>
      <div className="App">
        <main>
      <MainBanner />
      <MainScrollbar />
      <NewsHomepage />
     
        </main>
      </div>
    </>
  );
};

export default HomePage;

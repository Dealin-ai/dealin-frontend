import { useParams } from "react-router-dom";
import { DUMMY_NEWS } from "../components/news/News";
import MainBanner from "../components/mainBanner/MainBanner";
import NewsDetail from "../components/news/NewsDetail";

const NewsDetailPage = () => {
  const data = DUMMY_NEWS
  const params = useParams();
  const newsItem = data.find((item) => item.id === params.newsId)

  if(!newsItem) {
    return <p>News Not Found!</p>
  }

  return (
    <>
    <MainBanner />
      <NewsDetail 
      key={newsItem.id}
      id={newsItem.id}
      title={newsItem.title}
      description={newsItem.description}
      image={newsItem.image}
      />
    </>
  );
};

export default NewsDetailPage;

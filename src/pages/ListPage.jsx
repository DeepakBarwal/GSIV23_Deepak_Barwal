import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import { useGetUpcomingMoviesByPopularityQuery } from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { data: movies, isLoading } = useGetUpcomingMoviesByPopularityQuery({
    page: 1,
  });

  console.log(movies);

  return (
    <div>
      <Header />
      <CardList />
    </div>
  );
};

export default ListPage;

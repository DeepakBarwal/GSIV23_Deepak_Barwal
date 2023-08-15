import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import { useGetUpcomingMoviesByPopularityQuery } from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { data, isLoading } = useGetUpcomingMoviesByPopularityQuery({
    page: 1,
  });
  console.log(data);

  return (
    <div>
      <Header />
      <CardList movies={data?.results} />
    </div>
  );
};

export default ListPage;

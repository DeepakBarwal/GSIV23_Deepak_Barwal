import Header from "../components/Header";
import { useGetUpcomingMoviesByPopularityQuery } from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { data: movies, isLoading } = useGetUpcomingMoviesByPopularityQuery({
    page: 1,
  });

  console.log(movies);

  return (
    <div>
      <Header />
    </div>
  );
};

export default ListPage;

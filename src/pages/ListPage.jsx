import { useGetUpcomingMoviesByPopularityQuery } from "../store/slices/moviesApiSlice";

const ListPage = () => {
  const { data: movies, isLoading } = useGetUpcomingMoviesByPopularityQuery({
    page: 1,
  });

  console.log(movies);

  return <div>ListPage</div>;
};

export default ListPage;

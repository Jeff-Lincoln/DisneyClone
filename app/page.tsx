import MoviesCarousel from '@/components/MoviesCarousel';
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from '@/lib/getMovies';
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';


export default async  function Home() {

  const upcommingMovies = await getUpcomingMovies();
  const toRatedMovies = await getTopRatedMovies();
  const PopularMovies =await getPopularMovies();


  return (
    <main className=''>
      <CarouselBannerWrapper />

      <div className='flex flex-col space-y-2 xl:mt-48 '>
        <MoviesCarousel movies={upcommingMovies} title='Upcoming'/>
        <MoviesCarousel movies={toRatedMovies} title='Top Rated'/>
        <MoviesCarousel movies={PopularMovies} title='Popular'/>

        {/** MoviesCarousel  */}
        {/** MoviesCarousel  */}
      </div>
    </main>
  )
};

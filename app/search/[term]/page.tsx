import AISuggestion from '@/components/AIsuggestion';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        term: string;
    }
};


async function SearchPage({params: { term } }: Props) {
    if(!term) notFound();

    const termToUSe = decodeURI(term);

    //API call to get the Searched Movies
    const movies = await getSearchedMovies(termToUSe);

    //API call to get the Popular Movies
    const popularMovies = await getPopularMovies();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUSe}</h1>

        {/** AI Suggestion */}
        <AISuggestion term={termToUSe}/>

        <MoviesCarousel title='Movies' movies={movies} isVertical/>
        <MoviesCarousel title='You may also like' movies={popularMovies} />
      </div>
    </div>
  )
}

export default SearchPage;

'use client';

import style from './style.min.module.css';
import { useSearchParams } from 'next/navigation';
import { tmdb, TtmdbId } from '@/api/tmdbApi';
import { useEffect, useState } from 'react';
import { FaFilm, FaMoneyBillAlt, FaScroll, FaStar } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import {
  numberFixed,
  formatCurrency,
  formatDecimal,
} from '@/scripts/formatNumber';

const Movie = () => {
  const moviesURL = tmdb.API__MOVIE_URL;
  const apiKey = tmdb.API_KEY;
  const apiImg = tmdb.API_IMG_w500;

  const searchParams = useSearchParams();
  const id = searchParams.get('id') as string;

  console.log('params da url', id);

  const [movie, setMovie] = useState({} as TtmdbId);

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieIdUrl = `${moviesURL}${id}?${apiKey}${tmdb.API_LANGBR}`;

    console.log('id da url', id);

    getMovie(movieIdUrl);
  }, [id]);

  return (
    <main className={style.main}>
      <section className={style.movie_page}>
        {movie && (
          <>
            <div className={style.poster_path}>
              <img
                src={
                  movie.poster_path
                    ? apiImg + movie.poster_path
                    : 'img/placeholder_w500.jpg'
                }
                alt={movie.title}
              />
            </div>
            <div className={style.info_movie}>
              <div>
                <h2 className={style.title}>{movie.title}</h2>
                <p className={style.tagline}>{movie.tagline}</p>
              </div>
              <div>
                <p>
                  Votos:{' '}
                  <span>
                    <FaPeopleGroup />
                    {formatDecimal(movie.vote_count)}
                  </span>
                </p>
                <p>
                  Avaliação:{' '}
                  <span className={style.span}>
                    <FaStar /> {numberFixed(movie.vote_average)}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Duração:{' '}
                  <span>
                    <FaFilm /> {movie.runtime} minutos
                  </span>
                </p>

                <p>
                  Orçamento:{' '}
                  <span>
                    <FaMoneyBillAlt />
                    {formatCurrency(movie.budget)}
                  </span>
                </p>

                <p>
                  Receita:{' '}
                  <span>
                    <FaMoneyBillAlt />
                    {formatCurrency(movie.revenue)}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FaScroll />
                    Resumo:{' '}
                  </span>
                </p>
                <p>{movie.overview}</p>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Movie;

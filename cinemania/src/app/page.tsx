'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import MovieCard from '@/components/MovieCard';
import { tmdb, Ttdmb } from '@/api/tmdbApi';
import { FaStar } from 'react-icons/fa';
import MovieInfo from '@/components/buttons/MovieInfo';
import { numberFixed, formatDecimal } from '@/scripts/formatNumber';
import Carrossel from '@/components/Carrossel';

const TMBD = tmdb;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [priMv, setPrimv] = useState<Ttdmb>({} as Ttdmb);

  const getMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);

    //const movieRandom = Math.ceil(Math.random() * 6);

    setPrimv(data.results[0]);
  };

  const mudaFundo = (urlImg: string) => {
    const headerImg = document.getElementById('header') as HTMLElement;

    headerImg.style.backgroundImage = `url('${urlImg}')`;
  };

  useEffect(() => {
    const moviesNowPlaying = TMBD.API_NOW_PLAYING + TMBD.API_LANGBR;

    getMovies(moviesNowPlaying);
  }, []);

  useEffect(() => {
    if (!priMv) {
      return;
    } else {
      const urlposter = priMv.backdrop_path;

      if (urlposter) {
        const imgH = TMBD.API_IMG_original + urlposter;

        mudaFundo(imgH);
      }
    }
  }, [priMv]);

  return (
    <main className={styles.main}>
      {priMv.poster_path && (
        <section id="header" className={styles.header}>
          <div>
            <h2>{priMv.title}</h2>
            <p className={styles.clasification}>
              <FaStar /> {numberFixed(priMv.vote_average)} |{' '}
              {`Votos: ${formatDecimal(priMv.vote_count)}`}
            </p>
            <p className={styles.decript}>{priMv.overview}</p>
            <MovieInfo id_movie={priMv.id} />
          </div>
        </section>
      )}

      {topMovies.length > 0 && (
        <section className={styles.container}>
          <h3 className={styles.title_sec}>Filmes mais procurados:</h3>
          <Carrossel>
            {topMovies.map((movie: Ttdmb) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                title={movie.title}
                vote_count={movie.vote_count}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
          </Carrossel>
        </section>
      )}
    </main>
  );
}

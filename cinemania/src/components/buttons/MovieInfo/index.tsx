import Link from 'next/link';
import style from './style.module.css';

type TporpsId = {
  id_movie: number;
};
const MovieInfo = ({ id_movie }: TporpsId) => {
  return (
    <button className={style.button}>
      <Link href={{ pathname: '/movie', query: { id: id_movie } }}>
        Mais informações
      </Link>
    </button>
  );
};

export default MovieInfo;

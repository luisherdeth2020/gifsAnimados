import ShareButton from './ShareButton';
import styles from './ListGifs.module.css';

const ListGifs = ({ gifsList }) => {
    const noResults = gifsList.length === 0;

    return (
        <div className={styles.container}>
            <div className={styles.container__list}>
                {/* ? --> "optional chaining", lo que hace es que simplemente no peta si el objeto o la función que estoy intentando acceder no existe (en este caso si giftList no existe, osea si es null o undefined) */}
                {gifsList?.map((item) => (
                    <div key={item.id} className={styles.container__gifs}>
                        <img src={item.url} alt={item.title} />
                        <p>{item.title}</p>
                        <ShareButton itemUrl={item.url} />
                    </div>
                ))}
                {noResults && <p className={styles.notFound}>No se ha encontrado ningún gif con esa búsqueda 😕</p>}
            </div>
        </div>
    );
};

export default ListGifs;

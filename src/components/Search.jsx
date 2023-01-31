import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { fetchData } from '../api/fetchData';

function Search({ setGifsList }) {
    const [errorMessage, setErrorMessage] = useState({ show: false, message: '' });

    const onFormSubmit = (e) => {
        e.preventDefault();
        const inputText = e.target[0].value;

        if (inputText.length > 12) {
            return setErrorMessage({ show: true, message: '¡Máximo de caracteres es 12!😥' });
        }
        if (inputText.length === 0) {
            return setErrorMessage({ show: true, message: '¡No puede estar vacío!😭' });
        }

        fetchData(inputText).then((data) => {
            setGifsList(data);
        });
    };

    const onInputChange = (e) => {
        if (errorMessage.show) setErrorMessage({ show: false, message: '' });
    };

    return (
        <form className={styles.container} onSubmit={onFormSubmit}>
            <div className={styles.search__box}>
                <input
                    className={`${styles.search__input} ${errorMessage.show && styles.search__error}`}
                    type="text"
                    maxLength="12"
                    autoFocus
                    placeholder="Search Giphy"
                    aria-label="Search Giphys"
                    onChange={onInputChange}
                />
                <button className={styles.search__button} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
            {errorMessage.show && <div className={styles.error__input}>{errorMessage.message}</div>}
        </form>
    );
}
export default Search;
// Deuda técnica

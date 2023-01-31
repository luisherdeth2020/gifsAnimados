import styles from './ShareButton.module.css';

const ShareButton = ({ itemUrl }) => {
    const showShareWindow = (blob) => {
        let file = new File([blob], 'picture.gif', { type: 'image/gif' });
        let filesArray = [file];

        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
            navigator.share({
                files: filesArray,
            });
        }
    };

    const shareGif = () => {
        fetch(itemUrl)
            .then((res) => {
                return res.blob();
            })
            .then((data) => {
                showShareWindow(data);
            });
    };

    return (
        <button className={styles.dora} role="button" onClick={shareGif} type="button">
            Compartir
        </button>
    );
};

export default ShareButton;

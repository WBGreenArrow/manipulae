import { HeaderListElement } from "./styles";
import styles from "../../styles/root";

const HeaderList = () => {
    return (
        <HeaderListElement styles={styles}>
            <span>#</span>
            <span>Album</span>
            <span>Faixa</span>
            <span>Artista</span>
            <span>D.</span>
            <span>Favoritos</span>
        </HeaderListElement>
    );
};

export default HeaderList;

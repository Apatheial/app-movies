import styles from "./Container.module.css";

function Container({ children, personStyle } : { children?: React.ReactNode, personStyle?: string}) {
    return (
        <section className={ `${styles.container} ${personStyle || ""}` }>
            { children }
        </section>
    );
}

export default Container;

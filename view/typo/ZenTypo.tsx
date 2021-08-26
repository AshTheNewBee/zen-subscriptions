import styles from "./ZenTypo.module.scss";

interface Props {
  _id?: string;
  heading: string;
}

export const ZenH2 = ({ _id, heading }: Props): JSX.Element => {
  return (
    <h2 className={styles.h2} id={_id}>
      {heading}
    </h2>
  );
};

export const ZenH4 = ({ _id, heading }: Props): JSX.Element => {
  return (
    <h4 className={styles.h4} id={_id}>
      {heading}
    </h4>
  );
};

export const ErrHeading = ({ _id, heading }: Props): JSX.Element => {
  return (
    <h4 className={styles.err} id={_id}>
      {heading}
    </h4>
  );
};

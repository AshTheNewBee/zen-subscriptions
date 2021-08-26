import styles from "./ZenInput.module.scss";
import { ZenLabel } from "../../view";

interface Props {
  _id: string;
  inputId: string;
  value?: string | number;
  label?: string;
  handleChange: Function;
}

export const ZenInput = ({
  _id,
  inputId,
  label,
  handleChange,
  value,
}: Props): JSX.Element => {
  return (
    <div id={styles[inputId]}>
      <input
        className={styles[_id]}
        id={_id}
        type="text"
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <ZenLabel _id={_id} label={label} />
    </div>
  );
};

import styles from "./ZenSelect.module.scss";

interface Props {
  _id: string;
  options?: any[];
  label?: string;
  value?: string;
  defaultVal?: string;
  handleChange: Function;
}

export const ZenSelect = ({
  _id,
  options,
  label,
  value,
  defaultVal,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className="select" id={styles[_id]}>
      <select
        id={styles.input}
        value={options?.filter((val) => val === defaultVal)}
        onChange={(e) => handleChange(e)}
      >
        {options &&
          options.map((_option, i) => (
            <option id={_option} key={i}>
              {_option}
            </option>
          ))}
      </select>
      <div className={styles.label} id="label">
        <label htmlFor={_id}>{label}</label>
      </div>
    </div>
  );
};

import { ZenSelect, ZenInput, ZenLabel } from "../view";

const CurrencySelector = () => {
  const currencies = {
    USD: {
      rate: 1,
    },
    AUD: {
      rate: 0.78,
    },
  };

  return (
    <>
      <ZenSelect
        _id="currencySelector"
        defaultVal={"USD"}
        options={Object.keys(currencies)}
        label="Currency"
        handleChange={() => {}}
        // {(e: React.ChangeEvent<HTMLInputElement>) => {
        //   setSubscription({
        //     ...subscription,
        //     plan: e.target.value,
        //   });
        // }}
      />
    </>
  );
};

export default CurrencySelector;

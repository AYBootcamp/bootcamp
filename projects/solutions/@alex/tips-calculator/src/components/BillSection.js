import PropTypes from "prop-types";
import React from "react";

import { NumberInput, SectionTitle } from "../sharedComponents";

const BillSection = ({ bill, setBill }) => {
  return (
    <section>
      <SectionTitle title="Bill" />
      <NumberInput
        value={bill}
        onChange={(e) => {
          if (+e.target.value >= 0) {
            setBill(+e.target.value);
          }
        }}
      />
    </section>
  );
};
BillSection.propTypes = {
  bill: PropTypes.number,
  setBill: PropTypes.func,
};

export default BillSection;

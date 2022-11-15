import PropTypes from "prop-types";
import React from "react";

import { NumberInput, SectionTitle } from "../sharedComponents";

const PeopleSection = ({ people, setPeople }) => {
  return (
    <section>
      <SectionTitle title="Number of People" />
      <NumberInput
        value={people}
        onChange={(e) => {
          if (+e.target.value >= 0) {
            setPeople(+e.target.value);
          }
        }}
      />
    </section>
  );
};

PeopleSection.propTypes = {
  people: PropTypes.number,
  setPeople: PropTypes.func,
};

export default PeopleSection;

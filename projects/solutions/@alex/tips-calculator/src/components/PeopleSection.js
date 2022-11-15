import React from "react";

import { NumberInput, SectionTitle } from "../sharedComponents";

const PeopleSection = () => {
  return (
    <section>
      <SectionTitle title="Number of People" />
      <NumberInput />
    </section>
  );
};

export default PeopleSection;

import React, { FC } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { parse } from 'query-string';

import SchoolCharacters from 'components/templates/SchoolCharacters';
import { charactersData } from 'data/characters';

const EnhancedSchoolCharacters: FC = () => {
  const { schoolCode } = useParams<{ schoolCode: string }>();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const schoolCodeList = Object.keys(charactersData);

  if (schoolCodeList.includes(schoolCode)) {
    const { school, players } = charactersData[schoolCode];

    return (
      <SchoolCharacters
        school={school}
        characters={players}
        isLoading={isLoading}
      />
    );
  }

  return <Redirect to="/" />;
};

export default EnhancedSchoolCharacters;

import styled from "styled-components";

import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding-left: 8px;
  display: frex;
  align-items: center;
`;

const SButtonWapper = styled.div`
  padding-left: 8px;
`;

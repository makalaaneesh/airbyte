import React from "react";
import styled from "styled-components";
import { Label, TextWithHTML } from "components";

const GroupTitle = styled.div`
  margin-top: -23px;
  background: ${({ theme }) => theme.whiteColor};
  padding: 0 5px;
  display: inline-block;
  vertical-align: middle;

  & > div {
    min-width: 180px;
    display: inline-block;
  }
`;

const FormGroup = styled.div`
  margin: 41px 0 27px;
  border: 2px solid ${({ theme }) => theme.greyColor20};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 20px;
`;

type GroupControlsProps = {
  title: React.ReactNode;
  description?: string;
};

const GroupControls: React.FC<GroupControlsProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <FormGroup>
      <GroupTitle>{title}</GroupTitle>
      {description && <Label message={<TextWithHTML text={description} />} />}
      {children}
    </FormGroup>
  );
};

export default GroupControls;

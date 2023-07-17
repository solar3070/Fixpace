import COLOR from "@/constants/colors";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

interface InputProps {
  placeholder: string;
  value?: string;
  maxLength?: number;
  isInvalid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, value, maxLength, isInvalid = false, onChange, onKeyDown }: InputProps) {
  return (
    <StWrapper>
      <StInput
        type="text"
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        isInvalid={isInvalid}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Image src="/icons/enter.svg" alt="엔터 아이콘" width={14} height={11} />
    </StWrapper>
  );
}

export default Input;

const shake = keyframes`
  0% { 
    margin-left: 0px; 
  }
  25% { 
    margin-left: 5px; 
  }
  75% { 
    margin-left: -5px; 
  }
  100% { 
    margin-left: 0px; 
  }
`;

const StWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px;
  border-radius: 10px;

  background-color: ${COLOR.dark200};
`;

const StInput = styled.input<{ isInvalid: boolean }>`
  width: 100%;

  padding-top: 5px;
  border: 0;
  border-radius: 10px;

  background-color: transparent;
  font-size: 26px;
  line-height: 1.2;
  color: ${COLOR.white};
  caret-color: ${COLOR.purple};

  &::placeholder {
    color: ${COLOR.gray};
    overflow: visible;
  }

  &:focus {
    outline: none;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      animation: ${shake} 0.2s ease-in-out 2;
    `};
`;

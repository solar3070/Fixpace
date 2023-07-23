import { COLOR } from "@/constants";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

interface InputProps {
  placeholder: string;
  value?: string;
  maxLength?: number;
  error?: string;
  hasCounter?: boolean;
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  value,
  maxLength,
  error = "",
  hasCounter = false,
  onFocus,
  onChange,
  onKeyDown,
  onKeyUp,
}: InputProps) {
  return (
    <>
      <StInputWrapper>
        <StInput
          type="text"
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          isInvalid={error !== ""}
          onFocus={onFocus}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
        <Image src="/icons/enter.svg" alt="엔터 아이콘" width={14} height={11} />
      </StInputWrapper>
      <StWrapper>
        {error && <StErrorMessage>{error}</StErrorMessage>}
        {hasCounter && value !== undefined && <StCounter>{value.length} / 5</StCounter>}
      </StWrapper>
    </>
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

const StInputWrapper = styled.div`
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
    color: ${COLOR.gray200};
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

const StWrapper = styled.div`
  position: relative;
  height: 20px;
`;

const StCounter = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  right: 0;

  padding: 10px;
  font-size: 15px;
  color: ${COLOR.gray100};
`;

const StErrorMessage = styled.p`
  position: absolute;
  left: 0;

  padding: 10px 0 0 10px;
  font-size: 15px;
  color: ${COLOR.purple};
`;

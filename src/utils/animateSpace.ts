import { KeyboardEvent } from "react";

let counter = 0;

export const animateSpace = (e: KeyboardEvent<HTMLInputElement>) => {
  if (counter > 15) return;

  const section = e.currentTarget.parentElement?.closest("section");
  if (section) {
    let keyElement = document.createElement("img");
    keyElement.src = "/icons/sparkle.svg";
    document.body.appendChild(keyElement);
    counter += 1;

    const { randX, randY } = setRandomPosition(section);
    const randPx = `${Math.round(Math.random() * 15) + 20}px`;

    keyElement.style.cssText = `
      position: absolute;
      left: ${randX}px;
      top: ${randY}px;
      width: ${randPx};
      height: ${randPx};
      transition: all 2s linear 0s;
      opacity: 0;
    `;

    setTimeout(() => {
      keyElement.style.left = keyElement.offsetLeft - 30 + "px";
      keyElement.style.top = keyElement.offsetTop - 30 + "px";
    }, 0);

    setTimeout(() => {
      document.body.removeChild(keyElement);
      counter -= 1;
    }, 2000);
  }
};

const MAX_IMAGE_SIZE = 35;

const setRandomPosition = (section: HTMLElement) => {
  const { clientWidth, clientHeight } = document.documentElement;
  const { top, left, bottom, right } = section.getBoundingClientRect();

  let randX = 0;
  let randY = 0;

  const direction = Math.floor(Math.random() * 2);
  if (!direction) {
    randX = Math.round(Math.random() * clientWidth - MAX_IMAGE_SIZE);
    const yRange = [top, clientHeight - MAX_IMAGE_SIZE - bottom];
    const index = Math.floor(Math.random() * 2);
    randY = Math.random() * yRange[index] + index * bottom;
  } else {
    randY = Math.round(Math.random() * clientHeight - MAX_IMAGE_SIZE);
    const xRange = [left, clientWidth - MAX_IMAGE_SIZE - right];
    const index = Math.floor(Math.random() * 2);
    randX = Math.random() * xRange[index] + index * right;
  }

  return { randX, randY };
};

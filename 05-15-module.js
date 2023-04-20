export function plus() { // 함수 export
  return 2 + 1;
}

export function minus() { // 함수 export
  return 2 - 1;
}

export const height = 171.4; // 상수 export

export let weight = 74.3; // 변수 export
weight = 76; // 값 변경

export class Animal { // 클래스 export
  constructor(name) {
    this.name = name;
  }
}

export let color = "Red";
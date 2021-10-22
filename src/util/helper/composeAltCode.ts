export const composeAltCode = (grade: number, class_: number, num: number): string => {
    return `${grade}${class_}${num.toString().padStart(2, '0')}`
  }
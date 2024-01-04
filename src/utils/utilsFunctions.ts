export const fakePager = <T>(array: T[]): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += 10) {
      result.push(array.slice(i, i + 10));
    }      
    return  result;
};
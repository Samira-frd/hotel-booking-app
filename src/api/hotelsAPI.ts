export const mockData = async () => {
    const response = await fetch("/data.json");
    const result = await response.json();
    return result;
  }
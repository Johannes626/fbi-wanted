export default class FetchData {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

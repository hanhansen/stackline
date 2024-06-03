import { data } from "../data";

class Client {
  get(_path: string) {
    return data;
  }
}

export default Client;

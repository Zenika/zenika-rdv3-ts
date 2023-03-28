import {hello} from "./hello";

describe('first test delete if it works on your computer', () => {
  it('says hello to Zenika', () => {
    expect(hello('Zenika')).toEqual("Hello Zenika")
  });
});
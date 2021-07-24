import { CorrectServerDescriptionEncodingPipe } from './correct-server-name-encoding.pipe';

describe('CorrectServerDescriptionEncodingPipe', () => {
  it('create an instance', () => {
    const pipe = new CorrectServerDescriptionEncodingPipe();
    expect(pipe).toBeTruthy();
  });
});

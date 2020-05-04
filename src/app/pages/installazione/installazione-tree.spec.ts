import { InstallazioneTree } from './installazione-tree';

describe('InstallazioneTree', () => {
  it('should create an instance', () => {
    expect(new InstallazioneTree(1,'text:string',null)).toBeTruthy();
  });
});

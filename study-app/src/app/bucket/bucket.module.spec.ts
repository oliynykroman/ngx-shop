import { BucketModule } from './bucket.module';

describe('BucketModule', () => {
  let bucketModule: BucketModule;

  beforeEach(() => {
    bucketModule = new BucketModule();
  });

  it('should create an instance', () => {
    expect(bucketModule).toBeTruthy();
  });
});

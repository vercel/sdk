# ResponseBodyCommitMeta

Commit metadata from the git commit author

## Example Usage

```typescript
import { ResponseBodyCommitMeta } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyCommitMeta = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Email from git commit author                                                  |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | Name from git commit author                                                   |
| `isVerified`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether the commit was signed/verified (GitHub only, others return undefined) |
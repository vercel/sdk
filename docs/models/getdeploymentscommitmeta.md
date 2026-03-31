# GetDeploymentsCommitMeta

Commit metadata from the git commit author

## Example Usage

```typescript
import { GetDeploymentsCommitMeta } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsCommitMeta = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Email from git commit author                                                  |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | Name from git commit author                                                   |
| `isVerified`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether the commit was signed/verified (GitHub only, others return undefined) |
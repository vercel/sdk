# CancelDeploymentCommitMeta

Commit metadata from the git commit author

## Example Usage

```typescript
import { CancelDeploymentCommitMeta } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentCommitMeta = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Email from git commit author                                                  |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | Name from git commit author                                                   |
| `isVerified`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether the commit was signed/verified (GitHub only, others return undefined) |
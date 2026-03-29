# CreateDeploymentAttribution

Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.

## Example Usage

```typescript
import { CreateDeploymentAttribution } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentAttribution = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commitMeta`                                                                     | [models.CommitMeta](../models/commitmeta.md)                                     | :heavy_minus_sign:                                                               | Commit metadata from the git commit author                                       |
| `gitUser`                                                                        | [models.GitUser](../models/gituser.md)                                           | :heavy_minus_sign:                                                               | Git provider user associated with the commit author email (only set if resolved) |
| `vercelUser`                                                                     | [models.VercelUser](../models/verceluser.md)                                     | :heavy_minus_sign:                                                               | Vercel user linked to the git provider account (only set if resolved)            |
# CancelDeploymentAttribution

Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.

## Example Usage

```typescript
import { CancelDeploymentAttribution } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentAttribution = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commitMeta`                                                                     | [models.CancelDeploymentCommitMeta](../models/canceldeploymentcommitmeta.md)     | :heavy_minus_sign:                                                               | Commit metadata from the git commit author                                       |
| `gitUser`                                                                        | [models.CancelDeploymentGitUser](../models/canceldeploymentgituser.md)           | :heavy_minus_sign:                                                               | Git provider user associated with the commit author email (only set if resolved) |
| `vercelUser`                                                                     | [models.CancelDeploymentVercelUser](../models/canceldeploymentverceluser.md)     | :heavy_minus_sign:                                                               | Vercel user linked to the git provider account (only set if resolved)            |
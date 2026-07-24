# GetDeploymentResponseBodyAttribution

Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.

## Example Usage

```typescript
import { GetDeploymentResponseBodyAttribution } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyAttribution = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `commitMeta`                                                                                   | [models.GetDeploymentResponseBodyCommitMeta](../models/getdeploymentresponsebodycommitmeta.md) | :heavy_minus_sign:                                                                             | Commit metadata from the git commit author                                                     |
| `gitUser`                                                                                      | [models.GetDeploymentResponseBodyGitUser](../models/getdeploymentresponsebodygituser.md)       | :heavy_minus_sign:                                                                             | Git provider user associated with the commit author email (only set if resolved)               |
| `vercelUser`                                                                                   | [models.GetDeploymentResponseBodyVercelUser](../models/getdeploymentresponsebodyverceluser.md) | :heavy_minus_sign:                                                                             | Vercel user linked to the git provider account (only set if resolved)                          |
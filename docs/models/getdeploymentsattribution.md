# GetDeploymentsAttribution

Commit attribution metadata

## Example Usage

```typescript
import { GetDeploymentsAttribution } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsAttribution = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commitMeta`                                                                     | [models.GetDeploymentsCommitMeta](../models/getdeploymentscommitmeta.md)         | :heavy_minus_sign:                                                               | Commit metadata from the git commit author                                       |
| `gitUser`                                                                        | [models.GetDeploymentsGitUser](../models/getdeploymentsgituser.md)               | :heavy_minus_sign:                                                               | Git provider user associated with the commit author email (only set if resolved) |
| `vercelUser`                                                                     | [models.GetDeploymentsVercelUser](../models/getdeploymentsverceluser.md)         | :heavy_minus_sign:                                                               | Vercel user linked to the git provider account (only set if resolved)            |
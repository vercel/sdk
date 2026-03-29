# ResponseBodyAttribution

Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.

## Example Usage

```typescript
import { ResponseBodyAttribution } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyAttribution = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `commitMeta`                                                                     | [models.ResponseBodyCommitMeta](../models/responsebodycommitmeta.md)             | :heavy_minus_sign:                                                               | Commit metadata from the git commit author                                       |
| `gitUser`                                                                        | [models.ResponseBodyGitUser](../models/responsebodygituser.md)                   | :heavy_minus_sign:                                                               | Git provider user associated with the commit author email (only set if resolved) |
| `vercelUser`                                                                     | [models.ResponseBodyVercelUser](../models/responsebodyverceluser.md)             | :heavy_minus_sign:                                                               | Vercel user linked to the git provider account (only set if resolved)            |
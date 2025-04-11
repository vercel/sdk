# UpdateProjectGitProviderOptions

## Example Usage

```typescript
import { UpdateProjectGitProviderOptions } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectGitProviderOptions = {
  createDeployments: "enabled",
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createDeployments`                                                                                                                                                                                     | [models.UpdateProjectCreateDeployments](../models/updateprojectcreatedeployments.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                      | Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead |
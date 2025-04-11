# GetProjectsGitProviderOptions

## Example Usage

```typescript
import { GetProjectsGitProviderOptions } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsGitProviderOptions = {
  createDeployments: "enabled",
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createDeployments`                                                                                                                                                                                     | [models.GetProjectsCreateDeployments](../models/getprojectscreatedeployments.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                      | Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead |
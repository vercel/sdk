# CreateProjectGitProviderOptions

## Example Usage

```typescript
import { CreateProjectGitProviderOptions } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectGitProviderOptions = {
  createDeployments: "disabled",
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createDeployments`                                                                                                                                                                                     | [models.CreateProjectCreateDeployments](../models/createprojectcreatedeployments.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                      | Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead |
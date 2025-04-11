# GitProviderOptions

## Example Usage

```typescript
import { GitProviderOptions } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: GitProviderOptions = {
  createDeployments: "disabled",
};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createDeployments`                                                                                                                                                                                     | [models.CreateDeployments](../models/createdeployments.md)                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                      | Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead |
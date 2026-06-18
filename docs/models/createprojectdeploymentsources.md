# CreateProjectDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { CreateProjectDeploymentSources } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectDeploymentSources = {
  sources: [
    "v0",
  ],
  enabled: true,
  environments: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sources`                                                                          | [models.CreateProjectProjectsSources](../models/createprojectprojectssources.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `environments`                                                                     | *models.CreateProjectProjectsEnvironments*[]                                       | :heavy_check_mark:                                                                 | N/A                                                                                |
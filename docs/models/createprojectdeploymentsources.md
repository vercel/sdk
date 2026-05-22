# CreateProjectDeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { CreateProjectDeploymentSources } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: CreateProjectDeploymentSources = {
  sources: [
    "integration",
  ],
  enabled: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sources`                                                                          | [models.CreateProjectProjectsSources](../models/createprojectprojectssources.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
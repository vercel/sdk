# UpdateProjectDeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { UpdateProjectDeploymentSources } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectDeploymentSources = {
  sources: [],
  enabled: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `sources`                                                                          | [models.UpdateProjectProjectsSources](../models/updateprojectprojectssources.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
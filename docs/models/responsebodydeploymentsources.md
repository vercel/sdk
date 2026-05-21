# ResponseBodyDeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { ResponseBodyDeploymentSources } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjsoncreator.js";

let value: ResponseBodyDeploymentSources = {
  sources: [
    "git",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `sources`                                                                              | [models.GetProjectsResponseBodySources](../models/getprojectsresponsebodysources.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `enabled`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
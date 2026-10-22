# GetProjectBoxesConfig

## Example Usage

```typescript
import { GetProjectBoxesConfig } from "@vercel/sdk/models/getprojectboxesop.js";

let value: GetProjectBoxesConfig = {
  image: {
    requested: "<value>",
    resolved: "<value>",
  },
  instances: {
    "key": 5100.59,
  },
  resources: {
    requests: {
      memory: "<value>",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `command`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `configuredInstances`                                                    | *models.ConfiguredInstances*                                             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `image`                                                                  | [models.Image](../models/image.md)                                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `instances`                                                              | *models.GetProjectBoxesInstances*                                        | :heavy_check_mark:                                                       | N/A                                                                      |
| `livenessProbe`                                                          | [models.LivenessProbe](../models/livenessprobe.md)                       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `resources`                                                              | [models.GetProjectBoxesResources](../models/getprojectboxesresources.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `terminationGracePeriodSeconds`                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
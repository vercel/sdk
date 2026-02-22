# ResponseBodyPlatform

Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)

## Example Usage

```typescript
import { ResponseBodyPlatform } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyPlatform = {
  source: {
    name: "<value>",
  },
  origin: {
    type: "id",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                     | [models.GetDeploymentResponseBodyDeploymentsSource](../models/getdeploymentresponsebodydeploymentssource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `origin`                                                                                                     | [models.ResponseBodyOrigin](../models/responsebodyorigin.md)                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `meta`                                                                                                       | Record<string, *string*>                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
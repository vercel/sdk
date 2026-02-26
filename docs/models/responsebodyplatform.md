# ResponseBodyPlatform

Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)

## Example Usage

```typescript
import { ResponseBodyPlatform } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodyPlatform = {
  source: {
    name: "<value>",
  },
  origin: {
    type: "id",
    value: "<value>",
  },
  creator: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                       | [models.GetDeploymentResponseBodyDeploymentsSource](../models/getdeploymentresponsebodydeploymentssource.md)   | :heavy_check_mark:                                                                                             | The external platform that created the deployment (e.g. its display name).                                     |
| `origin`                                                                                                       | [models.ResponseBodyOrigin](../models/responsebodyorigin.md)                                                   | :heavy_check_mark:                                                                                             | Reference back to the entity on the platform that initiated the deployment.                                    |
| `creator`                                                                                                      | [models.GetDeploymentResponseBodyDeploymentsCreator](../models/getdeploymentresponsebodydeploymentscreator.md) | :heavy_check_mark:                                                                                             | The user on the external platform who triggered the deployment.                                                |
| `meta`                                                                                                         | Record<string, *string*>                                                                                       | :heavy_minus_sign:                                                                                             | Arbitrary key-value metadata provided by the platform.                                                         |
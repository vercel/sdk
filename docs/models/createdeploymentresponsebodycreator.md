# CreateDeploymentResponseBodyCreator

Information about the deployment creator

## Example Usage

```typescript
import { CreateDeploymentResponseBodyCreator } from "@vercel/sdk/models/createdeploymenthasdeploymentsvalue.js";

let value: CreateDeploymentResponseBodyCreator = {
  uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
  username: "john-doe",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Stable creator id across principal types (user id, app id, integration configuration id, or `system`).         | 96SnxkFiMyVKsK3pnoHfx3Hz                                                                                       |
| `type`                                                                                                         | [models.CreateDeploymentResponseBodyDeploymentsType](../models/createdeploymentresponsebodydeploymentstype.md) | :heavy_minus_sign:                                                                                             | Principal type of the deployment creator.                                                                      |                                                                                                                |
| `username`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The username of the user that created the deployment                                                           | john-doe                                                                                                       |
| `avatar`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The avatar of the user that created the deployment                                                             |                                                                                                                |
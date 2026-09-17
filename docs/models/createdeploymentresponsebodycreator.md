# CreateDeploymentResponseBodyCreator

Information about the deployment creator

## Example Usage

```typescript
import { CreateDeploymentResponseBodyCreator } from "@vercel/sdk/models/responsebodyimages.js";

let value: CreateDeploymentResponseBodyCreator = {
  uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
  username: "john-doe",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The avatar of the user that created the deployment                                                             |                                                                                                                |
| `type`                                                                                                         | [models.CreateDeploymentResponseBodyDeploymentsType](../models/createdeploymentresponsebodydeploymentstype.md) | :heavy_minus_sign:                                                                                             | Principal type of the deployment creator.                                                                      |                                                                                                                |
| `uid`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Stable creator id across principal types (user id, app id, integration configuration id, or `system`).         | 96SnxkFiMyVKsK3pnoHfx3Hz                                                                                       |
| `username`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The username of the user that created the deployment                                                           | john-doe                                                                                                       |
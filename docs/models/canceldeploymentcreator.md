# CancelDeploymentCreator

Information about the deployment creator

## Example Usage

```typescript
import { CancelDeploymentCreator } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentCreator = {
  uid: "96SnxkFiMyVKsK3pnoHfx3Hz",
  username: "john-doe",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uid`                                                | *string*                                             | :heavy_check_mark:                                   | The ID of the user that created the deployment       | 96SnxkFiMyVKsK3pnoHfx3Hz                             |
| `username`                                           | *string*                                             | :heavy_minus_sign:                                   | The username of the user that created the deployment | john-doe                                             |
| `avatar`                                             | *string*                                             | :heavy_minus_sign:                                   | The avatar of the user that created the deployment   |                                                      |
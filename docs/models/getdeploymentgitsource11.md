# GetDeploymentGitSource11

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSource11 } from "@vercel/sdk/models/responsebodyproject.js";

let value: GetDeploymentGitSource11 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://honorable-shadowbox.com",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody111Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody111type.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `ref`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `sha`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `gitUrl`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
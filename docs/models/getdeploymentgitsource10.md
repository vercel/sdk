# GetDeploymentGitSource10

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSource10 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSource10 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://which-barracks.name",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody210Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody210type.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `ref`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `sha`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `gitUrl`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
# GetDeploymentGitSourceDeployments8

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments8 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSourceDeployments8 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://usable-aftermath.org",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody1Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody1type.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `ref`                                                                                                                                                                            | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `sha`                                                                                                                                                                            | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `gitUrl`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
# GetDeploymentGitSource8

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSource8 } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentGitSource8 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://puny-rawhide.net",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody28Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody28type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `ref`                                                                                                                                                                              | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `sha`                                                                                                                                                                              | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `gitUrl`                                                                                                                                                                           | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
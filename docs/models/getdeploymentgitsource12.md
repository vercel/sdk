# GetDeploymentGitSource12

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSource12 } from "@vercel/sdk/models/getdeploymentmaxdurationdeployments2.js";

let value: GetDeploymentGitSource12 = {
  gitUrl: "https://steep-recovery.com",
  ref: "<value>",
  sha: "<value>",
  type: "custom",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gitUrl`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `ref`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `sha`                                                                                                                                                                                | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `type`                                                                                                                                                                               | [models.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody212Type](../models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody212type.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
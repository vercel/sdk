# GetDeploymentGitSourceDeployments6

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GetDeploymentGitSourceDeployments6 } from "@vercel/sdk/models/operations/getdeployment.js";

let value: GetDeploymentGitSourceDeployments6 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://low-mortise.org/",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.GetDeploymentGitSourceDeploymentsResponse200ApplicationJSONType](../../models/operations/getdeploymentgitsourcedeploymentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `ref`                                                                                                                                                                    | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `sha`                                                                                                                                                                    | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `gitUrl`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
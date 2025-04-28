# GitSource8

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GitSource8 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: GitSource8 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://teeming-electronics.name",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                 | [models.CancelDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBody8Type](../models/canceldeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody8type.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `ref`                                                                                                                                                                                  | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `sha`                                                                                                                                                                                  | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `gitUrl`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
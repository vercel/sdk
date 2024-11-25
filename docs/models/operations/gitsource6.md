# GitSource6

Allows custom git sources (local folder mounted to the container) in test mode

## Example Usage

```typescript
import { GitSource6 } from "@vercel/sdk/models/operations/canceldeployment.js";

let value: GitSource6 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://genuine-fuel.biz",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [operations.CancelDeploymentGitSourceDeploymentsResponse200ApplicationJSONResponseBodyType](../../models/operations/canceldeploymentgitsourcedeploymentsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `ref`                                                                                                                                                                                                  | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `sha`                                                                                                                                                                                                  | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `gitUrl`                                                                                                                                                                                               | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
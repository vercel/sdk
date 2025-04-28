# CancelDeploymentGitSource4

## Example Usage

```typescript
import { CancelDeploymentGitSource4 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitSource4 = {
  type: "github-custom-host",
  host: "swift-deer.net",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [models.CancelDeploymentGitSourceDeploymentsResponse200Type](../models/canceldeploymentgitsourcedeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `host`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `org`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `repo`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `ref`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `sha`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `prId`                                                                                                                         | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
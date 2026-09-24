# CancelDeploymentGitSource4

## Example Usage

```typescript
import { CancelDeploymentGitSource4 } from "@vercel/sdk/models/readystate.js";

let value: CancelDeploymentGitSource4 = {
  host: "swift-deer.net",
  org: "<value>",
  repo: "<value>",
  type: "github-custom-host",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `host`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `org`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `prId`                                                                                                                         | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `ref`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `repo`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `sha`                                                                                                                          | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [models.CancelDeploymentGitSourceDeploymentsResponse200Type](../models/canceldeploymentgitsourcedeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
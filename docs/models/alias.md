# Alias

## Example Usage

```typescript
import { Alias } from "@vercel/sdk/models/getprojectsop.js";

let value: Alias = {
  deployment: {
    createdAt: 6834.37,
    createdIn: "<value>",
    creator: {
      email: "Abigale.Renner@hotmail.com",
      uid: "<id>",
      username: "Ellis.Stoltenberg",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    id: "<id>",
    plan: "<value>",
    private: true,
    readyState: "<value>",
    type: "<value>",
    url: "https://unaware-trick.org/",
    userId: "<id>",
  },
  domain: "ordinary-tray.org",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `configuredBy`                                                                     | [models.ResponseBodyConfiguredBy](../models/responsebodyconfiguredby.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `configuredChangedAt`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `deployment`                                                                       | [models.ResponseBodyDeployment](../models/responsebodydeployment.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `domain`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `environment`                                                                      | [models.ResponseBodyEnvironment](../models/responsebodyenvironment.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitBranch`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `redirect`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `redirectStatusCode`                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `target`                                                                           | [models.GetProjectsResponseBodyTarget](../models/getprojectsresponsebodytarget.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
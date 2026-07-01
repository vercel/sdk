# UpdateMicrofrontendsAlias

## Example Usage

```typescript
import { UpdateMicrofrontendsAlias } from "@vercel/sdk/models/updatemicrofrontendspermissions.js";

let value: UpdateMicrofrontendsAlias = {
  deployment: {
    id: "<id>",
    createdAt: 334.53,
    createdIn: "<value>",
    creator: {
      email: "Heber_Friesen-Bechtelar55@hotmail.com",
      uid: "<id>",
      username: "Ronny.Raynor-Murphy",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "pro",
    previewCommentsEnabled: false,
    private: false,
    readyState: "CANCELED",
    type: "LAMBDAS",
    url: "https://another-recovery.com/",
    userId: "<id>",
  },
  domain: "webbed-unblinking.biz",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `configuredBy`                                                                           | [models.UpdateMicrofrontendsConfiguredBy](../models/updatemicrofrontendsconfiguredby.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `configuredChangedAt`                                                                    | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `deployment`                                                                             | [models.UpdateMicrofrontendsDeployment](../models/updatemicrofrontendsdeployment.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `domain`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `environment`                                                                            | [models.UpdateMicrofrontendsEnvironment](../models/updatemicrofrontendsenvironment.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `gitBranch`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `redirect`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `redirectStatusCode`                                                                     | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `target`                                                                                 | [models.UpdateMicrofrontendsTarget](../models/updatemicrofrontendstarget.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
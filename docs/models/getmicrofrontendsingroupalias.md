# GetMicrofrontendsInGroupAlias

## Example Usage

```typescript
import { GetMicrofrontendsInGroupAlias } from "@vercel/sdk/models/getmicrofrontendsingroupmicrofrontendsresponse200applicationjsontype.js";

let value: GetMicrofrontendsInGroupAlias = {
  deployment: {
    id: "<id>",
    createdAt: 6870,
    createdIn: "<value>",
    creator: {
      email: "Henriette48@yahoo.com",
      uid: "<id>",
      username: "Jefferey32",
    },
    deploymentHostname: "<value>",
    name: "<value>",
    plan: "pro",
    previewCommentsEnabled: false,
    private: false,
    readyState: "INITIALIZING",
    type: "LAMBDAS",
    url: "https://quarrelsome-formamide.org/",
    userId: "<id>",
  },
  domain: "jittery-mythology.biz",
  environment: "preview",
  target: "PREVIEW",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `configuredBy`                                                                                   | [models.GetMicrofrontendsInGroupConfiguredBy](../models/getmicrofrontendsingroupconfiguredby.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `configuredChangedAt`                                                                            | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `deployment`                                                                                     | [models.GetMicrofrontendsInGroupDeployment](../models/getmicrofrontendsingroupdeployment.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `domain`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `environment`                                                                                    | [models.GetMicrofrontendsInGroupEnvironment](../models/getmicrofrontendsingroupenvironment.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `gitBranch`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `redirect`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `redirectStatusCode`                                                                             | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `target`                                                                                         | [models.GetMicrofrontendsInGroupTarget](../models/getmicrofrontendsingrouptarget.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
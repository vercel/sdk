# GetSecurityFirewallConfigResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallConfigResponseBody } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 4355.26,
    updatedAt: "1735639075593",
    firewallEnabled: true,
    rules: [
      {
        id: "<id>",
        name: "<value>",
        active: false,
        conditionGroup: [],
        action: {},
        valid: true,
        validationErrors: "<value>",
      },
    ],
    ips: [
      {
        id: "<id>",
        hostname: "normal-certification.com",
        ip: "99.152.200.139",
        action: "challenge",
      },
    ],
    changes: [
      {},
    ],
  },
  draft: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 1814.25,
    updatedAt: "1735677109797",
    firewallEnabled: true,
    rules: [
      {
        id: "<id>",
        name: "<value>",
        active: false,
        conditionGroup: [],
        action: {},
        valid: true,
        validationErrors: "<value>",
      },
    ],
    ips: [
      {
        id: "<id>",
        hostname: "whirlwind-fowl.name",
        ip: "a8e9:ddfb:f5d0:8dee:0e86:af4a:c4ea:941d",
        action: "bypass",
      },
    ],
    changes: [
      {},
    ],
  },
  versions: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `active`                                                                                     | [models.Active](../models/active.md)                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `draft`                                                                                      | [models.Draft](../models/draft.md)                                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `versions`                                                                                   | [models.GetSecurityFirewallConfigVersions](../models/getsecurityfirewallconfigversions.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
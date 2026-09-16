# GetSecurityFirewallConfigResponseBody

## Example Usage

```typescript
import { GetSecurityFirewallConfigResponseBody } from "@vercel/sdk/models/getsecurityfirewallconfigresponsebody.js";

let value: GetSecurityFirewallConfigResponseBody = {
  active: {
    changes: [],
    firewallEnabled: true,
    id: "<id>",
    ips: [],
    ownerId: "<id>",
    projectKey: "<value>",
    rules: [
      {
        action: {},
        active: false,
        conditionGroup: [],
        id: "<id>",
        name: "<value>",
        valid: true,
        validationErrors: "<value>",
      },
    ],
    updatedAt: "1735659608327",
    version: 1498.82,
  },
  draft: {
    changes: [
      {},
    ],
    firewallEnabled: false,
    id: "<id>",
    ips: [],
    ownerId: "<id>",
    projectKey: "<value>",
    rules: [],
    updatedAt: "1735643797339",
    version: 3905.97,
  },
  versions: [
    {
      changes: [
        {},
      ],
      firewallEnabled: false,
      id: "<id>",
      ips: [],
      ownerId: "<id>",
      projectKey: "<value>",
      rules: [
        {
          action: {},
          active: true,
          conditionGroup: [
            {
              conditions: [
                {
                  op: "eq",
                  type: "ja3_digest",
                },
              ],
            },
          ],
          id: "<id>",
          name: "<value>",
          valid: true,
          validationErrors: "<value>",
        },
      ],
      updatedAt: "1735684440630",
      version: 4505.82,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `active`                                                                                     | [models.Active](../models/active.md)                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `draft`                                                                                      | [models.Draft](../models/draft.md)                                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `versions`                                                                                   | [models.GetSecurityFirewallConfigVersions](../models/getsecurityfirewallconfigversions.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
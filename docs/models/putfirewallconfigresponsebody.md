# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    changes: [],
    firewallEnabled: false,
    id: "<id>",
    ips: [
      {
        action: "deny",
        hostname: "lovely-freckle.info",
        id: "<id>",
        ip: "177.52.247.144",
      },
    ],
    ownerId: "<id>",
    projectKey: "<value>",
    rules: [
      {
        action: {},
        active: false,
        conditionGroup: [
          {
            conditions: [
              {
                op: "list",
                type: "scheme",
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
    updatedAt: "1735689524206",
    version: 8272.58,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `active`                                                               | [models.PutFirewallConfigActive](../models/putfirewallconfigactive.md) | :heavy_check_mark:                                                     | N/A                                                                    |
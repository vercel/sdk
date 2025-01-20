# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 9246.23,
    updatedAt: "1737399921064",
    firewallEnabled: false,
    crs: {
      sd: {
        active: false,
        action: "deny",
      },
      ma: {
        active: false,
        action: "deny",
      },
      lfi: {
        active: false,
        action: "deny",
      },
      rfi: {
        active: false,
        action: "log",
      },
      rce: {
        active: false,
        action: "deny",
      },
      php: {
        active: false,
        action: "deny",
      },
      gen: {
        active: false,
        action: "deny",
      },
      xss: {
        active: false,
        action: "log",
      },
      sqli: {
        active: false,
        action: "log",
      },
      sf: {
        active: false,
        action: "deny",
      },
      java: {
        active: false,
        action: "deny",
      },
    },
    rules: [
      {
        id: "<id>",
        name: "<value>",
        active: false,
        conditionGroup: [
          {
            conditions: [
              {
                type: "cookie",
                op: "suf",
              },
            ],
          },
        ],
        action: {},
      },
    ],
    ips: [
      {
        id: "<id>",
        hostname: "calculating-fort.org",
        ip: "95.241.186.132",
        action: "bypass",
      },
    ],
    changes: [
      {},
    ],
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `active`                             | [models.Active](../models/active.md) | :heavy_check_mark:                   | N/A                                  |
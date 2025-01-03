# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 9747.87,
    updatedAt: "1735869468194",
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
        action: "log",
      },
      rfi: {
        active: false,
        action: "deny",
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
        action: "log",
      },
      xss: {
        active: false,
        action: "log",
      },
      sqli: {
        active: false,
        action: "deny",
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
                type: "raw_path",
                op: "eq",
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
        hostname: "hateful-t-shirt.biz",
        ip: "241.186.132.198",
        action: "deny",
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
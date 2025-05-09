# PutFirewallConfigResponseBody

## Example Usage

```typescript
import { PutFirewallConfigResponseBody } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigResponseBody = {
  active: {
    ownerId: "<id>",
    projectKey: "<value>",
    id: "<id>",
    version: 3941.34,
    updatedAt: "1746783949476",
    firewallEnabled: false,
    crs: {
      sd: {
        active: false,
        action: "log",
      },
      ma: {
        active: false,
        action: "log",
      },
      lfi: {
        active: false,
        action: "deny",
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
        action: "deny",
      },
      sqli: {
        active: false,
        action: "log",
      },
      sf: {
        active: false,
        action: "log",
      },
      java: {
        active: false,
        action: "log",
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
                type: "region",
                op: "ninc",
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
        hostname: "menacing-transparency.info",
        ip: "afca:489d:5dba:d7e4:bf7c:8fd4:0dc9:0bc8",
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
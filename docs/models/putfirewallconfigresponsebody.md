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
    updatedAt: "1735667598775",
    firewallEnabled: false,
    crs: {
      sd: {
        active: false,
        action: "log",
      },
      ma: {
        active: true,
        action: "deny",
      },
      lfi: {
        active: false,
        action: "log",
      },
      rfi: {
        active: true,
        action: "log",
      },
      rce: {
        active: false,
        action: "log",
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
        active: true,
        action: "log",
      },
      sf: {
        active: true,
        action: "log",
      },
      java: {
        active: true,
        action: "log",
      },
    },
    rules: [
      {
        id: "<id>",
        name: "<value>",
        active: true,
        conditionGroup: [],
        action: {},
        valid: true,
        validationErrors: "<value>",
      },
    ],
    ips: [],
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
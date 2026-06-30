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
    ips: [
      {
        id: "<id>",
        hostname: "drab-vicinity.name",
        ip: "aebe:8baf:ca48:9d5d:bad7:e4bf:7c8f:d40d",
        action: "log",
      },
    ],
    changes: [],
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `active`                             | [models.Active](../models/active.md) | :heavy_check_mark:                   | N/A                                  |
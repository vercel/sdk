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
        hostname: "oily-knuckle.biz",
        ip: "110.187.246.4",
        action: "deny",
      },
    ],
    changes: [],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `active`                                                               | [models.PutFirewallConfigActive](../models/putfirewallconfigactive.md) | :heavy_check_mark:                                                     | N/A                                                                    |
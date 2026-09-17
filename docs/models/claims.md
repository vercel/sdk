# Claims

Claim matchers an OIDC token must satisfy to use the policy.

## Example Usage

```typescript
import { Claims } from "@vercel/sdk/models/fourhundredandone.js";

let value: Claims = {
  name: "<value>",
  values: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `values`                                             | [models.PayloadValues](../models/payloadvalues.md)[] | :heavy_check_mark:                                   | N/A                                                  |
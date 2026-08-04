# PayloadClaims

Claim matchers an OIDC token must satisfy to use the policy.

## Example Usage

```typescript
import { PayloadClaims } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: PayloadClaims = {
  name: "<value>",
  values: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `values`                                             | [models.PayloadValues](../models/payloadvalues.md)[] | :heavy_check_mark:                                   | N/A                                                  |
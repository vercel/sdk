# UserEventPayloadClaims

Claim matchers an OIDC token must satisfy to use the policy.

## Example Usage

```typescript
import { UserEventPayloadClaims } from "@vercel/sdk/models/fourhundredandfour.js";

let value: UserEventPayloadClaims = {
  name: "<value>",
  values: [
    {
      value: "<value>",
      wildcards: false,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `values`                                                                     | [models.UserEventPayload443Values](../models/usereventpayload443values.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
# FourHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyEight } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FourHundredAndEightyEight = {
  mfa: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |
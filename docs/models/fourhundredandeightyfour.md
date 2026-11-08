# FourHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFour } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FourHundredAndEightyFour = {
  mfa: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |
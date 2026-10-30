# FourHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFour } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSeventyFour = {
  mfa: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |
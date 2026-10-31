# FourHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FourHundredAndSeventyFive = {
  mfa: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |
# FourHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyThree } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FourHundredAndEightyThree = {
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
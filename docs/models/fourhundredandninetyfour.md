# FourHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FourHundredAndNinetyFour = {
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
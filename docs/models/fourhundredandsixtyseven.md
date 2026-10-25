# FourHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySeven } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndSixtySeven = {
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
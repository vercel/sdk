# FourHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighteen } from "@vercel/sdk/models/fourhundredandeight.js";

let value: FourHundredAndEighteen = {
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
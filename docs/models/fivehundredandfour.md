# FiveHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFour } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FiveHundredAndFour = {
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
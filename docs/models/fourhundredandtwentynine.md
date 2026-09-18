# FourHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyNine } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndTwentyNine = {
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
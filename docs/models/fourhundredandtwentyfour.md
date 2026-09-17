# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndTwentyFour = {
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
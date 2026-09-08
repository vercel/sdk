# FourHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixteen } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndSixteen = {
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
# FourHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSix } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundredAndSix = {
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
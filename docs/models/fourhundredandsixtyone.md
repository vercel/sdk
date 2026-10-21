# FourHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyOne } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndSixtyOne = {
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
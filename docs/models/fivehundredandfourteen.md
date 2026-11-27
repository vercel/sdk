# FiveHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFourteen } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FiveHundredAndFourteen = {
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
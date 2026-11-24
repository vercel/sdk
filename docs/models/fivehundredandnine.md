# FiveHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNine } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FiveHundredAndNine = {
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
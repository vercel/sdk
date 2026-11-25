# FiveHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirteen } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FiveHundredAndThirteen = {
  mfa: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `mfa`                          | [models.Mfa](../models/mfa.md) | :heavy_check_mark:             | N/A                            |
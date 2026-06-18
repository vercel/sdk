# ThreeHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFive } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndThirtyFive = {
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
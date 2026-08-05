# ThreeHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFive } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: ThreeHundredAndEightyFive = {
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
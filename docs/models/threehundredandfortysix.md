# ThreeHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySix } from "@vercel/sdk/models/threehundredandtwelve.js";

let value: ThreeHundredAndFortySix = {
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
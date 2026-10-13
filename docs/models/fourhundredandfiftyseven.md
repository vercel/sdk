# FourHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySeven } from "@vercel/sdk/models/fourhundredandthirtysix.js";

let value: FourHundredAndFiftySeven = {
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
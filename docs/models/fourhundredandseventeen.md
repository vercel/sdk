# FourHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventeen } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndSeventeen = {
  amount: "176.07",
  currency: "Rand",
  expiresAt: "1741637899588",
  trialCreditsIssuedAt: 4221.42,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
# FourHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeven } from "@vercel/sdk/models/store.js";

let value: FourHundredAndSeven = {
  amount: "247.84",
  currency: "Falkland Islands Pound",
  expiresAt: "1750018595108",
  trialCreditsIssuedAt: 387.87,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
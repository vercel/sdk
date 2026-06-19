# TwoHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFour } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndNinetyFour = {
  trialCreditsIssuedAt: 3455.89,
  expiresAt: "1758764787407",
  amount: "732.09",
  currency: "Lari",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
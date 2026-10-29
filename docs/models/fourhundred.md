# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundred = {
  amount: "809.77",
  currency: "Naira",
  expiresAt: "1762554279320",
  trialCreditsIssuedAt: 478.12,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
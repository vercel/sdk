# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndThree = {
  amount: "198.85",
  currency: "CFA Franc BEAC",
  expiresAt: "1752860188822",
  trialCreditsIssuedAt: 9332.86,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
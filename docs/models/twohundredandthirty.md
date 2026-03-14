# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndThirty = {
  trialCreditsIssuedAt: 5842.61,
  expiresAt: "1757301380883",
  amount: "454.95",
  currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
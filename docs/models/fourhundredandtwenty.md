# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/fourhundredandnineteen.js";

let value: FourHundredAndTwenty = {
  amount: "932.56",
  currency: "Belarusian Ruble",
  expiresAt: "1758103629915",
  trialCreditsIssuedAt: 2228.78,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `amount`               | *string*               | :heavy_check_mark:     | N/A                    |
| `currency`             | *string*               | :heavy_check_mark:     | N/A                    |
| `expiresAt`            | *string*               | :heavy_check_mark:     | N/A                    |
| `trialCreditsIssuedAt` | *number*               | :heavy_check_mark:     | N/A                    |
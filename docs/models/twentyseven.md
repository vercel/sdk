# TwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySeven } from "@vercel/sdk/models/usereventpayload25beforetype.js";

let value: TwentySeven = {
  appName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `appName`             | *string*              | :heavy_check_mark:    | N/A                   |
| `appId`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `secretLastFourChars` | *string*              | :heavy_minus_sign:    | N/A                   |
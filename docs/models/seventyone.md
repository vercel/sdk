# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: SeventyOne = {
  appName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `appId`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `appName`             | *string*              | :heavy_check_mark:    | N/A                   |
| `secretLastFourChars` | *string*              | :heavy_minus_sign:    | N/A                   |
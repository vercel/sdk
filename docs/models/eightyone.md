# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/usereventpayload72action.js";

let value: EightyOne = {
  appName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `appId`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `appName`             | *string*              | :heavy_check_mark:    | N/A                   |
| `secretLastFourChars` | *string*              | :heavy_minus_sign:    | N/A                   |
# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: EightyOne = {
  domain: "separate-pinstripe.info",
  customNameservers: [],
  prevCustomNameservers: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |
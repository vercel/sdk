# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/jobdeployhook.js";

let value: EightyFour = {
  domain: "glittering-carnival.name",
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |
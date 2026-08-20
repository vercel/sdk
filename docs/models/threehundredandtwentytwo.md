# ThreeHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyTwo } from "@vercel/sdk/models/twohundredandsixty.js";

let value: ThreeHundredAndTwentyTwo = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `uid`                | *string*             | :heavy_check_mark:   | N/A                  |
| `name`               | *models.PayloadName* | :heavy_check_mark:   | N/A                  |
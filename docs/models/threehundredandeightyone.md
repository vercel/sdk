# ThreeHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyOne } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndEightyOne = {
  name: {
    name: "<value>",
  },
  uid: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `name`               | *models.PayloadName* | :heavy_check_mark:   | N/A                  |
| `uid`                | *string*             | :heavy_check_mark:   | N/A                  |
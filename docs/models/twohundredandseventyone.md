# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndSeventyOne = {
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
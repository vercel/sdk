# TwoHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyTwo } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndSeventyTwo = {
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
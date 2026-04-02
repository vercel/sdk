# TwoHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifteen } from "@vercel/sdk/models/usereventpayload162next.js";

let value: TwoHundredAndFifteen = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *models.Name*      | :heavy_check_mark: | N/A                |
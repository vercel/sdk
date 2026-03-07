# TwoHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNine } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: TwoHundredAndNine = {
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
# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/userevent.js";

let value: NinetyFour = {
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
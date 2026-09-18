# OneHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyOne } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndThirtyOne = {
  destinationId: "<id>",
  destinationName: "<value>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `destinationId`    | *string*           | :heavy_check_mark: | N/A                |
| `destinationName`  | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
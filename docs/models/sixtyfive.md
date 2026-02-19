# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/userevent.js";

let value: SixtyFive = {
  name: "<value>",
  destinationId: "<id>",
  destinationName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `destinationId`    | *string*           | :heavy_check_mark: | N/A                |
| `destinationName`  | *string*           | :heavy_check_mark: | N/A                |
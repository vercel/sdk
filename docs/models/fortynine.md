# FortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyNine } from "@vercel/sdk/models/userevent.js";

let value: FortyNine = {
  name: "<value>",
  fromId: "<id>",
  fromName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `fromId`           | *string*           | :heavy_check_mark: | N/A                |
| `fromName`         | *string*           | :heavy_check_mark: | N/A                |
# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/userevent.js";

let value: FiftyFive = {
  name: "<value>",
  fromId: "<id>",
  fromName: null,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `fromId`           | *string*           | :heavy_check_mark: | N/A                |
| `fromName`         | *string*           | :heavy_check_mark: | N/A                |
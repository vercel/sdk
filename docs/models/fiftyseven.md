# FiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySeven } from "@vercel/sdk/models/userevent.js";

let value: FiftySeven = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "incomplete-goat.info",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
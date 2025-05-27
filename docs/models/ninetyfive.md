# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/userevent.js";

let value: NinetyFive = {
  oldName: "<value>",
  newName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `oldName`          | *string*           | :heavy_check_mark: | N/A                |
| `newName`          | *string*           | :heavy_check_mark: | N/A                |
| `uid`              | *string*           | :heavy_minus_sign: | N/A                |
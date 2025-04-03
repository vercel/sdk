# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/userevent.js";

let value: NinetyTwo = {
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
# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSix = {
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
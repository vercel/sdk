# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyOne = {
  projectName: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `tags`             | *string*[]         | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_minus_sign: | N/A                |
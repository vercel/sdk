# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `tags`             | *string*[]         | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_minus_sign: | N/A                |
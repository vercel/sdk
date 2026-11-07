# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
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
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `tags`             | *string*[]         | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_minus_sign: | N/A                |
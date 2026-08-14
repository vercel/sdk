# OneHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyNine } from "@vercel/sdk/models/onehundredandtwentyseven.js";

let value: OneHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
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
# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/ninetyfour.js";

let value: OneHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  tags: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `tags`             | *string*[]         | :heavy_check_mark: | N/A                |
| `target`           | *string*           | :heavy_minus_sign: | N/A                |
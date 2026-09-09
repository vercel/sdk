# OneHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFive } from "@vercel/sdk/models/onehundredandfour.js";

let value: OneHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
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
| `srcImages`        | *string*[]         | :heavy_check_mark: | N/A                |
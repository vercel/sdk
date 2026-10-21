# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/job8.js";

let value: OneHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `srcImages`        | *string*[]         | :heavy_check_mark: | N/A                |
# OneHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNinetyOne = {
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
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `srcImages`        | *string*[]         | :heavy_check_mark: | N/A                |
# OneHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyEight } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndFortyEight = {
  projectId: "<id>",
  previousStatus: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_minus_sign: | N/A                |
| `headerName`       | *string*           | :heavy_minus_sign: | N/A                |
| `previousStatus`   | *string*           | :heavy_check_mark: | N/A                |
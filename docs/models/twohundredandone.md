# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndOne = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: null,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `headerName`       | *string*           | :heavy_check_mark: | N/A                |
| `previousStatus`   | *string*           | :heavy_check_mark: | N/A                |
| `justification`    | *string*           | :heavy_check_mark: | N/A                |
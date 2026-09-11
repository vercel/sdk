# TwoHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirteen } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndThirteen = {
  projectId: "<id>",
  headerName: "<value>",
  previousStatus: "<value>",
  justification: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `headerName`       | *string*           | :heavy_check_mark: | N/A                |
| `previousStatus`   | *string*           | :heavy_check_mark: | N/A                |
| `justification`    | *string*           | :heavy_check_mark: | N/A                |
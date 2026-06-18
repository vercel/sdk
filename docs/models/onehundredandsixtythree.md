# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndSixtyThree = {
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
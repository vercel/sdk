# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndTwenty = {
  headerName: "<value>",
  justification: "<value>",
  previousStatus: "<value>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `headerName`       | *string*           | :heavy_check_mark: | N/A                |
| `justification`    | *string*           | :heavy_check_mark: | N/A                |
| `previousStatus`   | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
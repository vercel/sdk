# OneHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFive } from "@vercel/sdk/models/preventautoblocking.js";

let value: OneHundredAndEightyFive = {
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
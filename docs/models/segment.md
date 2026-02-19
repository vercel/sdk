# Segment

## Example Usage

```typescript
import { Segment } from "@vercel/sdk/models/segment.js";

let value: Segment = {
  id: "<id>",
  label: "<value>",
  slug: "<value>",
  createdAt: 9171.2,
  updatedAt: 8945.82,
  projectId: "<id>",
  typeName: "segment",
  data: {},
  hint: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `createdBy`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `usedByFlags`                                          | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `usedBySegments`                                       | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `label`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slug`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `updatedAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `typeName`                                             | [models.SegmentTypeName](../models/segmenttypename.md) | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [models.Data](../models/data.md)                       | :heavy_check_mark:                                     | N/A                                                    |
| `hint`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `metadata`                                             | [models.SegmentMetadata](../models/segmentmetadata.md) | :heavy_minus_sign:                                     | N/A                                                    |
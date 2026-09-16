# Segment

## Example Usage

```typescript
import { Segment } from "@vercel/sdk/models/segment.js";

let value: Segment = {
  createdAt: 9171.2,
  data: {},
  hint: "<value>",
  id: "<id>",
  label: "<value>",
  projectId: "<id>",
  slug: "<value>",
  typeName: "segment",
  updatedAt: 8945.82,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `createdAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `createdBy`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `data`                                                 | [models.Data](../models/data.md)                       | :heavy_check_mark:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `hint`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `label`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slug`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `typeName`                                             | [models.SegmentTypeName](../models/segmenttypename.md) | :heavy_check_mark:                                     | N/A                                                    |
| `updatedAt`                                            | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `usedByFlags`                                          | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `usedBySegments`                                       | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |
| `metadata`                                             | [models.SegmentMetadata](../models/segmentmetadata.md) | :heavy_minus_sign:                                     | N/A                                                    |
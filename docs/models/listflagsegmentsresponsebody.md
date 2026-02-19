# ListFlagSegmentsResponseBody

## Example Usage

```typescript
import { ListFlagSegmentsResponseBody } from "@vercel/sdk/models/listflagsegmentsop.js";

let value: ListFlagSegmentsResponseBody = {
  data: [
    {
      id: "<id>",
      label: "<value>",
      slug: "<value>",
      createdAt: 9292,
      updatedAt: 5843.52,
      projectId: "<id>",
      typeName: "segment",
      data: {},
      hint: "<value>",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `data`                                   | [models.Segment](../models/segment.md)[] | :heavy_check_mark:                       | N/A                                      |
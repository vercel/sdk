# ListFlagSegmentsResponseBody

## Example Usage

```typescript
import { ListFlagSegmentsResponseBody } from "@vercel/sdk/models/listflagsegmentsop.js";

let value: ListFlagSegmentsResponseBody = {
  data: [
    {
      createdAt: 9292,
      data: {},
      hint: "<value>",
      id: "<id>",
      label: "<value>",
      projectId: "<id>",
      slug: "<value>",
      typeName: "segment",
      updatedAt: 5843.52,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `data`                                   | [models.Segment](../models/segment.md)[] | :heavy_check_mark:                       | N/A                                      |
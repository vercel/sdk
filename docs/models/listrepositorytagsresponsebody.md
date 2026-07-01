# ListRepositoryTagsResponseBody

## Example Usage

```typescript
import { ListRepositoryTagsResponseBody } from "@vercel/sdk/models/listrepositorytagsop.js";

let value: ListRepositoryTagsResponseBody = {
  tags: [
    {
      tag: "<value>",
      manifestDigest: "<value>",
      imageId: "<id>",
      kind: "manifest",
      status: "ready",
      sizeInBytes: 5084.87,
      createdAt: "1712317719384",
      updatedAt: "1735645123526",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tags`                                                                 | [models.ListRepositoryTagsTags](../models/listrepositorytagstags.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
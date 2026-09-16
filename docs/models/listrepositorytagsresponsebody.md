# ListRepositoryTagsResponseBody

## Example Usage

```typescript
import { ListRepositoryTagsResponseBody } from "@vercel/sdk/models/listrepositorytagsop.js";

let value: ListRepositoryTagsResponseBody = {
  tags: [
    {
      createdAt: "1734178660182",
      imageId: "<id>",
      kind: "attestation",
      manifestDigest: "<value>",
      sizeInBytes: 4844.75,
      status: "preparing",
      tag: "<value>",
      updatedAt: "1735645123526",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `tags`                                                                 | [models.ListRepositoryTagsTags](../models/listrepositorytagstags.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
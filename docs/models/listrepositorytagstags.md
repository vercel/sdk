# ListRepositoryTagsTags

## Example Usage

```typescript
import { ListRepositoryTagsTags } from "@vercel/sdk/models/listrepositorytagsop.js";

let value: ListRepositoryTagsTags = {
  createdAt: "1706053204054",
  imageId: "<id>",
  kind: "index",
  manifestDigest: "<value>",
  sizeInBytes: 2672.68,
  status: "ready",
  tag: "<value>",
  updatedAt: "1735652752273",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `arch`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `imageId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `kind`                                                                   | [models.ListRepositoryTagsKind](../models/listrepositorytagskind.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `manifestDigest`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `platform`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pushedBy`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `sizeInBytes`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `status`                                                                 | [models.ListRepositoryTagsStatus](../models/listrepositorytagsstatus.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `tag`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
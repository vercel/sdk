# ListRepositoryTagsTags

## Example Usage

```typescript
import { ListRepositoryTagsTags } from "@vercel/sdk/models/listrepositorytagsop.js";

let value: ListRepositoryTagsTags = {
  tag: "<value>",
  manifestDigest: "<value>",
  imageId: "<id>",
  kind: "index",
  status: "preparing",
  sizeInBytes: 4483.74,
  createdAt: "1724386967885",
  updatedAt: "1735652752273",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `tag`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `manifestDigest`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `imageId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `kind`                                                                   | [models.ListRepositoryTagsKind](../models/listrepositorytagskind.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `platform`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `arch`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pushedBy`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | [models.ListRepositoryTagsStatus](../models/listrepositorytagsstatus.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `sizeInBytes`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updatedAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
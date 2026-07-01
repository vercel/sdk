# VcrImageList

A paginated list of images for a repository.

## Example Usage

```typescript
import { VcrImageList } from "@vercel/sdk/models/vcrimagelist.js";

let value: VcrImageList = {
  images: [
    {
      status: "preparing",
      tags: [
        "<value 1>",
      ],
      id: "img_a1b2c3d4e5f6",
      repositoryId: "repo_a1b2c3d4e5f6",
      manifestDigest:
        "sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c",
      kind: "manifest",
      platform: "linux",
      arch: "amd64",
      sizeInBytes: 7369.1,
      createdAt: "2026-06-30T10:00:00.000Z",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `images`                                                           | [models.VcrImageListItem](../models/vcrimagelistitem.md)[]         | :heavy_check_mark:                                                 | N/A                                                                |
| `nextCursor`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to fetch the next page of results, when more are available. |
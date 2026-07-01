# GetRepositoryImageResponseBody

## Example Usage

```typescript
import { GetRepositoryImageResponseBody } from "@vercel/sdk/models/getrepositoryimageop.js";

let value: GetRepositoryImageResponseBody = {
  image: {
    layers: [],
    status: "preparing",
    tags: [],
    id: "img_a1b2c3d4e5f6",
    repositoryId: "repo_a1b2c3d4e5f6",
    manifestDigest:
      "sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c",
    kind: "index",
    platform: "linux",
    arch: "amd64",
    sizeInBytes: 1247.44,
    createdAt: "2026-06-30T10:00:00.000Z",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `image`                                                                     | [models.VcrImageDetail](../models/vcrimagedetail.md)                        | :heavy_check_mark:                                                          | A single image with its tags, status and resolved Dockerfile layer history. |
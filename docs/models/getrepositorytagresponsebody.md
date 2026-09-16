# GetRepositoryTagResponseBody

## Example Usage

```typescript
import { GetRepositoryTagResponseBody } from "@vercel/sdk/models/getrepositorytagop.js";

let value: GetRepositoryTagResponseBody = {
  tag: {
    arch: "amd64",
    createdAt: "2026-06-30T10:00:00.000Z",
    imageId: "img_a1b2c3d4e5f6",
    kind: "manifest",
    manifestDigest:
      "sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c",
    platform: "linux",
    sizeInBytes: 2906.92,
    status: "ready",
    tag: "latest",
    updatedAt: "2026-06-30T10:00:00.000Z",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `tag`                                                                                                                                      | [models.VcrTag](../models/vcrtag.md)                                                                                                       | :heavy_check_mark:                                                                                                                         | A tag pointing at an image in a Vercel Container Registry repository, enriched with the backing image's metadata and VHS-readiness status. |
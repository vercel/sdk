# VcrImageDetail

A single image with its tags, status and resolved Dockerfile layer history.

## Example Usage

```typescript
import { VcrImageDetail } from "@vercel/sdk/models/vcrimagedetail.js";

let value: VcrImageDetail = {
  layers: [
    {
      createdBy: null,
      digest: null,
      operation: "ENTRYPOINT",
      sizeBytes: 3373.08,
      type: "RUN",
      command: "<value>",
    },
  ],
  status: "ready",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "img_a1b2c3d4e5f6",
  repositoryId: "repo_a1b2c3d4e5f6",
  manifestDigest:
    "sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c",
  kind: "manifest",
  platform: "linux",
  arch: "amd64",
  sizeInBytes: 5796.88,
  createdAt: "2026-06-30T10:00:00.000Z",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `layers`                                                                                                  | *models.VcrImageLayer*[]                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `status`                                                                                                  | [models.VcrImageDetailStatus](../models/vcrimagedetailstatus.md)                                          | :heavy_check_mark:                                                                                        | VHS-readiness status, or `null` for a multi-platform index.                                               |                                                                                                           |
| `tags`                                                                                                    | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | Tags pointing at this image's manifest.                                                                   |                                                                                                           |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Internal identifier of the image.                                                                         | img_a1b2c3d4e5f6                                                                                          |
| `repositoryId`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Identifier of the repository the image belongs to.                                                        | repo_a1b2c3d4e5f6                                                                                         |
| `manifestDigest`                                                                                          | *string*                                                                                                  | :heavy_check_mark:                                                                                        | SHA-256 digest of the image manifest.                                                                     | sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c                                   |
| `kind`                                                                                                    | [models.VcrImageDetailKind](../models/vcrimagedetailkind.md)                                              | :heavy_check_mark:                                                                                        | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |                                                                                                           |
| `platform`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Operating system the manifest targets. Only present for single-platform manifests.                        | linux                                                                                                     |
| `arch`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | CPU architecture the manifest targets. Only present for single-platform manifests.                        | amd64                                                                                                     |
| `pushedBy`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Identifier of the actor that pushed the image.                                                            |                                                                                                           |
| `sizeInBytes`                                                                                             | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry.   |                                                                                                           |
| `vhs`                                                                                                     | [models.VcrImageDetailVhs](../models/vcrimagedetailvhs.md)                                                | :heavy_minus_sign:                                                                                        | Converted VHS drive data, present once an image has been optimized for sandbox launch.                    |                                                                                                           |
| `createdAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | ISO 8601 timestamp of when the image was created.                                                         | 2026-06-30T10:00:00.000Z                                                                                  |
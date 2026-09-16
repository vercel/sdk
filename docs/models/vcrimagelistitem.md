# VcrImageListItem

An image enriched with its tags and VHS-readiness status, as returned when listing a repository's images.

## Example Usage

```typescript
import { VcrImageListItem } from "@vercel/sdk/models/vcrimagelistitem.js";

let value: VcrImageListItem = {
  arch: "amd64",
  createdAt: "2026-06-30T10:00:00.000Z",
  id: "img_a1b2c3d4e5f6",
  kind: "manifest",
  manifestDigest:
    "sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c",
  platform: "linux",
  repositoryId: "repo_a1b2c3d4e5f6",
  sizeInBytes: 923.72,
  status: "preparing",
  tags: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `arch`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | CPU architecture the manifest targets. Only present for single-platform manifests.                        | amd64                                                                                                     |
| `createdAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | ISO 8601 timestamp of when the image was created.                                                         | 2026-06-30T10:00:00.000Z                                                                                  |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Internal identifier of the image.                                                                         | img_a1b2c3d4e5f6                                                                                          |
| `kind`                                                                                                    | [models.VcrImageListItemKind](../models/vcrimagelistitemkind.md)                                          | :heavy_check_mark:                                                                                        | Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. |                                                                                                           |
| `manifestDigest`                                                                                          | *string*                                                                                                  | :heavy_check_mark:                                                                                        | SHA-256 digest of the image manifest.                                                                     | sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c                                   |
| `platform`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Operating system the manifest targets. Only present for single-platform manifests.                        | linux                                                                                                     |
| `pushedBy`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Identifier of the actor that pushed the image.                                                            |                                                                                                           |
| `repositoryId`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Identifier of the repository the image belongs to.                                                        | repo_a1b2c3d4e5f6                                                                                         |
| `sizeInBytes`                                                                                             | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry.   |                                                                                                           |
| `status`                                                                                                  | [models.VcrImageListItemStatus](../models/vcrimagelistitemstatus.md)                                      | :heavy_check_mark:                                                                                        | VHS-readiness status, or `null` for a multi-platform index.                                               |                                                                                                           |
| `tags`                                                                                                    | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | Tags pointing at this image's manifest.                                                                   |                                                                                                           |
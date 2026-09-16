# VcrRepository

A Vercel Container Registry repository.

## Example Usage

```typescript
import { VcrRepository } from "@vercel/sdk/models/vcrrepository.js";

let value: VcrRepository = {
  createdAt: "2026-06-30T10:00:00.000Z",
  id: "repo_a1b2c3d4e5f6",
  name: "my-app",
  projectId: "prj_a1b2c3d4e5f6",
  public: false,
  updatedAt: "2026-06-30T10:00:00.000Z",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | ISO 8601 timestamp of when the repository was created.                                                                  | 2026-06-30T10:00:00.000Z                                                                                                |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Unique identifier of the repository.                                                                                    | repo_a1b2c3d4e5f6                                                                                                       |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Name of the repository.                                                                                                 | my-app                                                                                                                  |
| `projectId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Identifier of the project the repository belongs to.                                                                    | prj_a1b2c3d4e5f6                                                                                                        |
| `public`                                                                                                                | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the repository is public. Images in public repositories can be pulled by anyone. Defaults to `false` (private). | false                                                                                                                   |
| `updatedAt`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | ISO 8601 timestamp of when the repository was last updated.                                                             | 2026-06-30T10:00:00.000Z                                                                                                |
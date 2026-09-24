# UserEventJobPayload109HeadInfo

Information about the head commit/branch for a GitHub repository

## Example Usage

```typescript
import { UserEventJobPayload109HeadInfo } from "@vercel/sdk/models/usereventjobaction.js";

let value: UserEventJobPayload109HeadInfo = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  repoId: 4453.88,
  sha: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `org`              | *string*           | :heavy_check_mark: | N/A                |
| `ref`              | *string*           | :heavy_check_mark: | N/A                |
| `repo`             | *string*           | :heavy_check_mark: | N/A                |
| `repoId`           | *number*           | :heavy_check_mark: | N/A                |
| `sha`              | *string*           | :heavy_check_mark: | N/A                |
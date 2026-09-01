# UserEventJobPayload103HeadInfo

Information about the head commit/branch for a GitHub repository

## Example Usage

```typescript
import { UserEventJobPayload103HeadInfo } from "@vercel/sdk/models/ninetyeight.js";

let value: UserEventJobPayload103HeadInfo = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  repoId: 3949.38,
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
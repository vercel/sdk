# UserEventJobPayload105HeadInfo

Information about the head commit/branch for a GitHub repository

## Example Usage

```typescript
import { UserEventJobPayload105HeadInfo } from "@vercel/sdk/models/onehundredandfour.js";

let value: UserEventJobPayload105HeadInfo = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  repoId: 1588.58,
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
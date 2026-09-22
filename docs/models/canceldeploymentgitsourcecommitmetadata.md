# CancelDeploymentGitSourceCommitMetadata

## Example Usage

```typescript
import { CancelDeploymentGitSourceCommitMetadata } from "@vercel/sdk/models/readystate.js";

let value: CancelDeploymentGitSourceCommitMetadata = {
  author: {
    date: "2024-11-27",
    email: "Camron39@hotmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-06-16",
    email: "Davon.Lubowitz@gmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `author`                                                                                     | [models.CancelDeploymentGitSourceAuthor](../models/canceldeploymentgitsourceauthor.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `committer`                                                                                  | [models.CancelDeploymentGitSourceCommitter](../models/canceldeploymentgitsourcecommitter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
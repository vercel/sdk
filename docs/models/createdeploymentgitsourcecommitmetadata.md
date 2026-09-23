# CreateDeploymentGitSourceCommitMetadata

## Example Usage

```typescript
import { CreateDeploymentGitSourceCommitMetadata } from "@vercel/sdk/models/createdeploymentgitsource1.js";

let value: CreateDeploymentGitSourceCommitMetadata = {
  author: {
    date: "2024-04-10",
    email: "Trudie_Hickle24@gmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-08-08",
    email: "Alessandro_Mayer@gmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `author`                                                                                     | [models.CreateDeploymentGitSourceAuthor](../models/createdeploymentgitsourceauthor.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `committer`                                                                                  | [models.CreateDeploymentGitSourceCommitter](../models/createdeploymentgitsourcecommitter.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
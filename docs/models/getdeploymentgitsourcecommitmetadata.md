# GetDeploymentGitSourceCommitMetadata

## Example Usage

```typescript
import { GetDeploymentGitSourceCommitMetadata } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: GetDeploymentGitSourceCommitMetadata = {
  author: {
    date: "2024-12-13",
    email: "Erna.Conroy71@gmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-10-11",
    email: "Mia_Sawayn-Hammes20@gmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `author`                                                                               | [models.GetDeploymentGitSourceAuthor](../models/getdeploymentgitsourceauthor.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `committer`                                                                            | [models.GetDeploymentGitSourceCommitter](../models/getdeploymentgitsourcecommitter.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
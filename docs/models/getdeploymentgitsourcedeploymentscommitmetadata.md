# GetDeploymentGitSourceDeploymentsCommitMetadata

## Example Usage

```typescript
import { GetDeploymentGitSourceDeploymentsCommitMetadata } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: GetDeploymentGitSourceDeploymentsCommitMetadata = {
  author: {
    date: "2024-01-23",
    email: "Emiliano.Greenfelder@hotmail.com",
    name: "<value>",
  },
  committer: {
    date: "2024-08-26",
    email: "Antonette.Little92@hotmail.com",
    name: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `author`                                                                                                     | [models.GetDeploymentGitSourceDeploymentsAuthor](../models/getdeploymentgitsourcedeploymentsauthor.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `committer`                                                                                                  | [models.GetDeploymentGitSourceDeploymentsCommitter](../models/getdeploymentgitsourcedeploymentscommitter.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |